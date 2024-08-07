// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {LibStorageSlots} from './LibStorageSlots.sol';
import {IExperience} from '../experience/instance/IExperience.sol';
import {IPortalCondition} from '../portal/IPortalCondition.sol';

//public portal information
struct PortalInfo {

    //destination experience for the portal
    IExperience destination;

    //any condition that has been applied to the portal
    IPortalCondition condition;

    //fee to make the jump
    uint256 fee;

    //whether the portal is active
    bool active;
}

struct PortalRegistryStorage {
    //portals by portal id
    mapping(uint256 => PortalInfo) portals;

    //portal IDs by destination vector address hash
    mapping(bytes32 => uint256)  portalIdsByVectorHash;

    //portal IDs by destination experience address
    mapping(address => uint256)  portalIdsByExperience;

    //portal id counter
    uint256 nextPortalId;
}

library LibPortal {

    function load() internal pure returns (PortalRegistryStorage storage store) {
        bytes32 slot = LibStorageSlots.PORTAL_STORAGE;
        assembly {
            store.slot := slot
        }
    }
}