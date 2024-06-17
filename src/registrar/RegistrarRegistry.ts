import { Provider, Signer, TransactionResponse, ethers } from "ethers";
import {abi as RegistrarRegistryABI} from "../../artifacts/contracts/RegistrarRegistry.sol/RegistrarRegistry.json";
import { LogParser } from "../LogParser";
import { LogNames } from "../LogNames";
import { RPCRetryHandler } from "../RPCRetryHandler";
import { AllLogParser } from "../AllLogParser";

/**
 * Typescript proxy for RegistrarRegistry deployed contract.
 */
export interface IRegistrarRegistryOpts {
    address: string;
    admin: Provider | Signer;
    logParser: AllLogParser;
}

export interface IRegisterProps {
    defaultSigner: string;
    tokens?: bigint;
}

export interface IRegistrationResult {
    receipt: ethers.TransactionReceipt;
    registrarId: bigint;
}

export class RegistrarRegistry {
    static get abi() {
        return RegistrarRegistryABI;
    }
    
    readonly address: string;
    private admin: Provider | Signer;
    private registry: ethers.Contract;
    private logParser: AllLogParser;

    constructor(opts: IRegistrarRegistryOpts) {
        this.address = opts.address;
        this.admin = opts.admin;
        this.registry = new ethers.Contract(this.address, RegistrarRegistryABI, this.admin);
        this.logParser = opts.logParser;
        this.logParser.addAbi(this.address, RegistrarRegistryABI);
    }

    async registerRegistrar(props: IRegisterProps): Promise<IRegistrationResult> {
        if(!this.registry) {
            throw new Error("Registry not deployed");
        }
        const {defaultSigner, tokens} = props;

        const t = await RPCRetryHandler.withRetry(() =>this.registry.register(defaultSigner, {
            value: tokens
        }));
        const r = await t.wait();
        const logMap = this.logParser.parseLogs(r);
        const adds = logMap.get(LogNames.RegistrarAdded);
        if(!adds || adds.length === 0) {
            throw new Error("Registrar not added");
        }
        const id = adds[0].args[0];
        return {receipt: r, registrarId: id};
    }

    async addSigner(id: bigint, address: string): Promise<TransactionResponse> {
        if(!this.registry) {
            throw new Error("Registry not deployed");
        }
        const t = await RPCRetryHandler.withRetry(()=>this.registry.addSigner(id, address));
        return t;
    }

    async isSignerForRegistrar(props: {
        registrarId: bigint, signer: string
    }): Promise<boolean> {
        if(!this.registry) {
            throw new Error("Registry not deployed");
        }
        const {registrarId, signer} = props;
        const r = await RPCRetryHandler.withRetry(()=>this.registry.isRegistrar(registrarId, signer));
        return r;
    }

    
}

