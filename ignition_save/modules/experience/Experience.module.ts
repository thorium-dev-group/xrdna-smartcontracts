import { buildModule } from "@nomicfoundation/ignition-core";
import PortalRegistryModule from "../portal/PortalRegistry.module";
import ExperienceProxyModule from './ExperienceProxy.module';
import LibHooksModule from '../libraries/Libraries.module';

const VERSION = 1;
export default buildModule("Experience", (m) => {
    
    const proxy = m.useModule(ExperienceProxyModule);
    const portalReg = m.useModule(PortalRegistryModule);
    const libs = m.useModule(LibHooksModule);

    const args = {
        experienceFactory: proxy.experienceFactory,
        portalRegistry: portalReg.portalRegistry,
        experienceRegistry: proxy.experienceRegistry,
    }
    const master = m.contract("Experience", [args], {
        libraries: {
            LibHooks: libs.LibHooks
        },
        after: [proxy.experienceFactory, 
                proxy.experienceRegistry, 
                portalReg.portalRegistry]
    });
    m.call(proxy.experienceFactory, "setImplementation", [master, VERSION]);
    return {
        experienceRegistry: proxy.experienceRegistry,
        experienceFactory: proxy.experienceFactory,
        experienceMasterCopy: master
    }
});