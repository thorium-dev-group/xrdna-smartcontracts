// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {VectorAddress} from '../VectorAddress.sol';

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

struct AvatarJumpRequest {
    uint256 portalId;
    uint256 agreedFee;
    bytes destinationCompanySignature;
}

struct DelegatedJumpRequest {
    uint256 portalId;
    uint256 agreedFee;
    bytes avatarOwnerSignature;
}

interface IAvatar is IERC721Receiver {


    event SignerAdded(address indexed signer);
    event SignerRemoved(address indexed signer);
    event WearableAdded(address indexed wearable);
    event WearableRemoved(address indexed wearable);
    event LocationChanged(VectorAddress location);
    event AppearanceChanged(bytes appearanceDetails);
    event JumpSuccess(address experience, bytes connectionDetails);

    /**
     * @dev get the Avatar's unique username
     */
    function username() external view returns (string memory);

    /**
     * @dev get the Avatar's current vector address location (i.e. the experience they are in)
     */
    function location() external view returns (VectorAddress memory);

    /**
     * @dev get the Avatar's appearance details. These will be specific to the avatar
     * implementation off chain should be used by clients to render the avatar correctly.
     */
    function appearanceDetails() external view returns (bytes memory);

    /**
     * @dev Check whether an avatar can receive tokens when not in an experience that 
     * matches their current location. This prevents spamming of tokens to the avatar.
     */
    function canReceiveTokensOutsideOfExperience() external view returns (bool);

    /**
     * @dev Get the next signing nonce for a company signature.
     */
    function companySigningNonce(address signer) external view returns (uint256);

    /**
     * @dev Get the next signing nonce for an avatar owner signature.
     */
    function avatarOwnerSigningNonce() external view returns (uint256);

    /**
     * @dev Get the address of all wearable assets configured for the avatar. There is a 
     * limit of 200 wearables per avatar due to gas restrictions.
     */
    function getWearables() external view returns (address[] memory);

    /**
     * @dev Check whether the given address is an authorized signer for the avatar.
     */
    function isSigner(address signer) external view returns (bool);

    /**
     * @dev Initialize the avatar contract. This is called by the AvatarFactory when the avatar is created.
     * @param owner The address of the avatar owner
     * @param defaultExperience The address of the default experience contract where the avatar starts
     * @param initData Initialization data to pass to the avatar contract
     */
    function init(address owner, address defaultExperience, bytes memory initData) external;


    /**
     * @dev Set whether the avatar can receive tokens when not in an experience that matches 
     * their current location.
     */
    function setCanReceiveTokensOutsideOfExperience(bool canReceive) external;

    /**
     * @dev Set the location of the avatar. This must be called by a registered experience contract.
     */
    function setLocation(VectorAddress memory) external;

    /**
     * @dev Set the appearance details of the avatar. This must be called by the avatar owner.
     */
    function setAppearanceDetails(bytes memory) external;

    /**
     * @dev Move the avatar to a new experience. This must be called by the avatar owner.
     * If fees are required for the jump, they must be attached to the transaction or come
     * from the avatar contract balance.
     */
    function jump(AvatarJumpRequest memory request) external payable;

    /**
     * @dev Company can pay for the avatar to jump to a new experience. This must be 
     * called by a registered company contract. The avatar owner must sign off on
     * the request using the owner nonce tracked by this contract. If fees are required
     * for the jump, they must be attached to the transaction or come from the avatar
     * contract balance. The avatar owner signature approves the transfer of funds if 
     * coming from avatar contract.
     */
    function delegateJump(DelegatedJumpRequest memory request) external payable;

    /**
     * @dev Add a wearable asset to the avatar. This must be called by the avatar owner. 
     * This will revert if there are already 200 wearables configured.
     */
    function addWearable(address wearable) external;

    /**
     * @dev Remove a wearable asset from the avatar. This must be called by the avatar owner.
     */
    function removeWearable(address wearable) external;

    /**
     * @dev Add a signer to the avatar. This must be called by the avatar owner.
     */
    function addSigner(address signer) external;

    /**
     * @dev Remove a signer from the avatar. This must be called by the avatar owner.
     */
    function removeSigner(address signer) external;

    /**
     * @dev Withdraw funds from the avatar contract. This must be called by the avatar owner.
     */
    function withdraw(uint256 amount) external;
     
}