import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import LibrariesModule from "../../Libraries.module";
import CoreExtRegistryModule from "../../ext-registry/ExtensionRegistry.module";

export default buildModule("ExperienceInfoExtModule", (m) => {

        const libs = m.useModule(LibrariesModule);
        const coreReg = m.useModule(CoreExtRegistryModule).extensionsRegistry;
        
        const wac = m.contract("ExperienceInfoExt", [], {
            
            after: [
                coreReg,
            ]
        });
        return {
            experienceInfoExtension: wac
        }
});