// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

interface IExperienceHook {
    /**
     * @dev This function is called before a jump entry is made to the destination experience.
     * @param destExperience The destination experience address.
     * @param sourceWorld The source world address.
     * @param sourceCompany The source company address.
     * @param avatar The avatar address.
     * @return bool True if the jump entry is allowed, false otherwise.
     */
    function beforeJumpEntry(address destExperience, address sourceWorld, address sourceCompany, address avatar) external returns (bool);
}