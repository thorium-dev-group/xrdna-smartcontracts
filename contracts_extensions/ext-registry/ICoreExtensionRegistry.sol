// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {IExtension} from '../interfaces/IExtension.sol';
import {IAccessControl} from '../interfaces/IAccessControl.sol';

interface ICoreExtensionRegistry is IAccessControl {

    function getExtension(string calldata name) external view returns (address);

    function isRegistered(address _extension) external view returns (bool);

    function addExtension(IExtension _extension) external;

    function addExtensions(IExtension[] calldata _extensions) external;

    function upgradeExtension(IExtension _extension) external;

    function upgradeExtensions(IExtension[] calldata _extensions) external;

    function removeExtension(address _extension) external;
}