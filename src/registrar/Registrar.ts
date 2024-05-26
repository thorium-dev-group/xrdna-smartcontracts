import { Provider, Signer, TransactionResponse, ethers } from "ethers";
import {abi as RegistryABI} from "../../artifacts/contracts/RegistrarRegistry.sol/RegistrarRegistry.json";

/**
 * Typescript wrapper around regstirar functionality
 */
export interface IRegistrarOpts {
    registrarRegistryAddress: string;
    admin: Provider | Signer;
    registrarId: bigint;
}

export class Registrar {
    private address: string;
    private admin: Provider | Signer;
    private registrarId: bigint;
    private registry: ethers.Contract;

    constructor(opts: IRegistrarOpts) {
        this.address = opts.registrarRegistryAddress;
        this.admin = opts.admin;
        this.registrarId = opts.registrarId;
        this.registry = new ethers.Contract(this.address, RegistryABI, this.admin);
    }

    async addSigners(signers: string[]): Promise<TransactionResponse> {
        return await this.registry.addSigners(this.registrarId, signers);
    }

    async removeSigners(signers: string[]): Promise<TransactionResponse> {
        return await this.registry.removeSigners(this.registrarId, signers);
    }

}

    