// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;


//just uses cloning technique to copy proxies
library LibClone {
    function clone(address impl) internal returns (address proxy){
        require(impl != address(0), "LibClone: implementation cannot be zero address");
        // Adapted from https://github.com/optionality/clone-factory/blob/32782f82dfc5a00d103a7e61a17a5dedbd1e8e9d/contracts/CloneFactory.sol
        bytes20 targetBytes = bytes20(impl);
        assembly {
            let c := mload(0x40)
            mstore(c, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(c, 0x14), targetBytes)
            mstore(add(c, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            proxy := create(0, c, 0x37)
        }
    }
}