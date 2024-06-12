// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {BaseProxy, BaseProxyConstructorArgs} from '../../BaseProxy.sol';
import {BaseProxyStorage, LibBaseProxy, LibProxyAccess} from '../../libraries/LibBaseProxy.sol';


contract WorldProxy is BaseProxy {
    
    constructor(BaseProxyConstructorArgs memory args) BaseProxy(args) {}

}