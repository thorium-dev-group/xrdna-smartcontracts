// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;


interface ISupportsHook {
    
    function setHook(address _hook) external;

    function removeHook() external;

    function getHook() external view returns (address);
}