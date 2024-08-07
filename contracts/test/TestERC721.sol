// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {ERC721} from '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract TestERC721 is ERC721 {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _mint(msg.sender, 1);
    }

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}