// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {LibStorageSlots} from '../../core-libs/LibStorageSlots.sol';
import {VectorAddress} from '../../core-libs/LibVectorAddress.sol';

struct RemovableEntityStorage {
    bool active;
    bool removed;
    address termsOwner;
    string name;
    VectorAddress vector;
}

library LibRemovableEntity {

    function load() internal pure returns (RemovableEntityStorage storage ds) {
        bytes32 slot = LibStorageSlots.ACTIVATION_STORAGE;
        assembly {
            ds.slot := slot
        }
    }

}