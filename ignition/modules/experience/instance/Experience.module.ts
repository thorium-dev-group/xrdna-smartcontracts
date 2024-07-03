import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import LibrariesModule from "../../Libraries.module";
import RegistrarRegistryModule from "../../registrar/registry/RegistrarRegistry.module";
import FactoryExtModule from "../../extensions/registry/FactoryExt.module";
import CompanyRegistryModule from "../../company/registry/CompanyRegistry.module";
import ExpRegistryModule from "../../experience/registry/ExperienceRegistry.module";
import ExpExtResolverModule from './ExperienceExtResolver.module';

export default buildModule("ExperienceModule", (m) => {

        const libs = m.useModule(LibrariesModule);
        const cExtResolver = m.useModule(ExpExtResolverModule).experienceExtensionResolver;
        const cReg = m.useModule(CompanyRegistryModule).companyRegistry;
        const expReg = m.useModule(ExpRegistryModule).experienceRegistry;
        const regReg = m.useModule(RegistrarRegistryModule).registrarRegistry;
        const factoryExt = m.useModule(FactoryExtModule).factoryExtension;


        //this registrar is cloned so any admin props will be replaced once cloned and initialized with new 
        //registrar props
        const args = {
            extensionResolver: cExtResolver,
            owningRegistry: expReg,
            companyRegistry: cReg
        }
        
        const rr = m.contract("Experience", [args], {
            libraries: {
                LibExtensions: libs.LibExtensions,
                LibAccess: libs.LibAccess,
                LibVectorAddress: libs.LibVectorAddress
            },
            after: [
                cExtResolver,
                cReg,
                expReg,
                regReg,
                cReg,
                libs.LibExtensions,
                libs.LibAccess

            ]
        });
        const data = m.encodeFunctionCall(factoryExt, "setEntityImplementation", [rr]);
        m.send("setEntityImplementation", expReg, 0n, data);
        return {
            experience: rr
        }
});