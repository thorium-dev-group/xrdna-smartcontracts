// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {BaseProxy, BaseProxyConstructorArgs} from '../../base-types/BaseProxy.sol';

/**
 * @title AvatarRegistryProxy
 * @dev A proxy contract for AvatarRegistry so it can be upgraded and retain address and storage
 */
contract AvatarRegistryProxy is BaseProxy {
    constructor(BaseProxyConstructorArgs memory args) BaseProxy(args) {}
}