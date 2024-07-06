import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import ERC721Module from "./erc721/NTERC721.module";
import ERC20Module from "./erc20/NTERC20.module";

import {XRDNASigners} from '../../../src';
import {network} from 'hardhat';

export default buildModule("MultiAssetRegistry", (m) => {
    
    const erc20 = m.useModule(ERC20Module);
    const erc721 = m.useModule(ERC721Module);
    const xrdna = new XRDNASigners();
    const config = xrdna.deployment[network.config.chainId || 55555];
    const acct = config.assetRegistryAdmin;
    const admins = config.assetRegistryOtherAdmins;
    const args = {
        mainAdmin: acct,
        admins,
        registries: [erc721.erc721Registry, erc20.erc20Registry]
    }
    const Registry = m.contract("MultiAssetRegistry", 
                                [args], {
        after: [erc20.erc20Registry, erc721.erc721Registry]
    });
    return {
        erc20Registry: erc20.erc20Registry,
        erc721Registry: erc721.erc721Registry,
        erc20Factory: erc20.erc20Factory,
        erc721Factory: erc721.erc721Factory,
        erc20Master: erc20.erc20Master,
        erc721Master: erc721.erc721Master,
        multiAssetRegistry: Registry
    };
});