// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {VectorAddress} from '../VectorAddress.sol';

interface IBasicAvatarRegistry {

    function findAvatarByOwner(address owner) external view returns (address);
    function findAvatarByCurrentLocation(VectorAddress memory location) external view returns (address);
}