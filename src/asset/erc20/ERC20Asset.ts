import { AddressLike, Provider,ethers } from "ethers";
import {abi} from "../../../artifacts/contracts/asset/IAsset.sol/IAsset.json";
import { RPCRetryHandler } from "../../RPCRetryHandler";
import { AllLogParser } from "../../AllLogParser";
import { BaseAsset } from "../BaseAsset";

export interface IERC20Opts {
    address: string;
    provider: Provider;
    logParser: AllLogParser;
}

export type ERC20InitData = {
    originChainAddress: AddressLike;
    decimals: number;
    originChainId: bigint;
    maxSupply: bigint;
    symbol: string;
}

export class ERC20Asset extends BaseAsset {

    static encodeInitData(data: ERC20InitData): string {
        const ifc = new ethers.Interface(abi);
        const s = ifc.encodeFunctionData("encodeInitData", [data]);
        return `0x${s.substring(10)}`;
    }

    static get abi() {
        return abi;
    }

    readonly address: string;
    readonly provider: Provider;
    readonly asset: ethers.Contract;
    readonly logParser: AllLogParser;

    

    constructor(opts: IERC20Opts) {
        super();
        this.address = opts.address;
        this.provider = opts.provider;
        this.asset = new ethers.Contract(this.address, abi, this.provider);
        this.logParser = opts.logParser;
        this.logParser.addAbi(this.address, abi);
    }

    async name(): Promise<string> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.name());
    }

    async symbol(): Promise<string> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.symbol());
    }

    async upgraded(): Promise<boolean> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.upgraded());
    }

    async totalSupply(): Promise<bigint> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.totalSupply());
    }

    async balanceOf(account: AddressLike): Promise<bigint> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.balanceOf(account));
    }

    async decimals(): Promise<number> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.decimals());
    }

    async hook(): Promise<string> {
        return await  RPCRetryHandler.withRetry(()=>this.asset.hook());
    }

}
