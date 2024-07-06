// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {RegistrationTerms} from "./IRegistration.sol";

interface ITermsOwner {
    event TermsChanged(RegistrationTerms newTerms);

    function setTerms(RegistrationTerms calldata terms) external;
    function getTerms() external view returns (RegistrationTerms memory);
    function isStillActive() external view returns (bool);
    function isTermsOwnerSigner(address a) external view returns (bool);
}