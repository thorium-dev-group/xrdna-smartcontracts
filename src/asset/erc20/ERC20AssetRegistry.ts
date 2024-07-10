import { AddressLike, Contract, Provider, Signer, TransactionReceipt, TransactionResponse } from "ethers";
import {abi} from "../../../artifacts/contracts/asset/registry/IAssetRegistry.sol/IAssetRegistry.json";
import {abi as proxyABI} from '../../../artifacts/contracts/base-types/BaseProxy.sol/BaseProxy.json';
import { ERC20Asset, ERC20InitData } from "./ERC20Asset";
import { LogNames } from "../../LogNames";
import { RPCRetryHandler } from "../../RPCRetryHandler";
import { isPromise } from "util/types";
import { AllLogParser } from "../../AllLogParser";

export interface IERC20AssetRegistryOpts {
    admin: Provider | Signer;
    address: string;
    logParser: AllLogParser;
}

export type CreateERC20AssetResult = {
    receipt: TransactionReceipt;
    assetAddress: AddressLike;
}

export type ERC20CreateArgs = {
    name: string;
    issuer: AddressLike;
    originChainId: bigint;
    originChainAddress: AddressLike;
    symbol: string;
    initData: ERC20InitData;
}

export class ERC20AssetRegistry {

    static get abi() {
        return [
            ...abi,
            ...proxyABI
        ]
    }
    
    private admin: Provider | Signer;
    readonly address: string;
    private con: Contract;
    private logParser: AllLogParser;
    constructor(opts: IERC20AssetRegistryOpts) {
        if(isPromise(opts.address)) {
            throw new Error("Cannot pass address promise to AssetRegistry");
        }
        this.admin = opts.admin;
        this.address = opts.address;
        this.con = new Contract(this.address, abi, this.admin);
        this.logParser = opts.logParser;
        this.logParser.addAbi(this.address, abi);
    }

    async isRegisteredAsset(assetAddress: AddressLike): Promise<boolean> {
        return await  RPCRetryHandler.withRetry(()=>this.con.isRegistered(assetAddress));
    }

    async assetExists(originAddress: AddressLike, originChainId: bigint): Promise<boolean> {
        return await RPCRetryHandler.withRetry(() => this.con.assetExists(originAddress, originChainId));
    }

    async registerAsset(cArgs: ERC20CreateArgs): Promise<CreateERC20AssetResult> {
        let encoded = ERC20Asset.encodeInitData(cArgs.initData as ERC20InitData);
        let args = {
            name: cArgs.name,
            issuer: cArgs.issuer,
            originChainId: cArgs.originChainId,
            originAddress: cArgs.originChainAddress,
            symbol: cArgs.symbol,
            initData: encoded
        };
               
        const t = await  RPCRetryHandler.withRetry(()=>this.con.registerAsset(args));
        const r = await t.wait();
        if(!r.status) {
            throw new Error("Asset txn failed with status 0");
        }
        const logMap = this.logParser.parseLogs(r);

        const logs = logMap.get(LogNames.RegistryAddedEntity);
        if(!logs || logs.length == 0) {
            throw new Error("Asset not created");
        }
        const addr = logs[0].args[0];
        return {receipt: r, assetAddress: addr};
    }
}