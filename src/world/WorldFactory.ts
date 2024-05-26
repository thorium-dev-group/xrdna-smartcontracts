import { Signer, TransactionResponse, ethers } from "ethers";
import {abi as WorldFactoryABI} from "../../artifacts/contracts/world/WorldFactory.sol/WorldFactory.json";

/**
 * Typescript proxy for WorldFactory deployed contract
 */
export interface IWorldFactoryOpts {
    address: string;
    factoryAdmin: Signer;
}

export class WorldFactory {
    private address: string;
    private factoryAdmin: Signer;
    private factory: ethers.Contract;

    constructor(opts: IWorldFactoryOpts) {
        this.address = opts.address;
        this.factoryAdmin = opts.factoryAdmin;
        this.factory = new ethers.Contract(this.address, WorldFactoryABI, this.factoryAdmin);
    }

    /**
     * Set the World master implementation address to use when creating new World 
     * instances. This can only be called by the factory admin and is used to 
     * change the implementation of all new World creations. Existing worlds 
     * will need to go through their Registrar to upgrade to the new implementation.
     * 
     * @param implAddress 
     */
    async setImplementation(implAddress: string): Promise<TransactionResponse> {
        return await this.factory.setImplementation(implAddress);
    }
}