// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import {VectorAddress} from '../../libraries/LibVectorAddress.sol';
import {IAccessControl} from '../../interfaces/IAccessControl.sol';
import {IRemovableEntity} from '../../interfaces/entity/IRemovableEntity.sol';

/**
 * @dev Arguments for companies to add an experience to a world.
 */
struct AddExperienceArgs {
    //unique name of the experience
    string name;

    //initialization data
    bytes initData;
}

/**
 * @dev Arguments for delegating an avatar jump to a company.
 */
struct DelegatedAvatarJumpRequest {
    //avatar making jump
    address avatar;

    //the portal id of the jump (relative to the destination)
    uint256 portalId;

    //the fee required to make the jump
    uint256 agreedFee;

    //signature of the avatar owner agreeing to the jump and fees
    bytes avatarOwnerSignature;
}

/**
 * @dev Arguments for initializing a company.
 */
struct CompanyInitArgs {
     //the address of the company owner
    address owner;

     //the world in which the company operates
    address world;

    //the vector address of the company
    VectorAddress vector;

    //initialization data to pass to the company contract
    bytes initData;

    //the name of the company, must be globally unique, case-insensitive
    string name;
}

/**
 * @title ICompany
 * @dev Interface for a company that can add experiences to a world and mint assets.
 * Companies register through Worlds in order to offer experiences to avatars and 
 * create assets within worlds.
 */
interface ICompany is IAccessControl, IRemovableEntity {

    event CompanyAddedExperience(address indexed experience, uint256 indexed portalId);
    event CompanyDeactivatedExperience(address indexed experience, string reason);
    event CompanyReactivatedExperience(address indexed experience);
    event CompanyRemovedExperience(address indexed experience, string reason, uint256 indexed portalId);
    event CompanyAddedExperienceCondition(address indexed experience, address indexed condition);
    event CompanyRemovedExperienceCondition(address indexed experience);
    event CompanyChangedExperiencePortalFee(address indexed experience, uint256 indexed fee);
    event CompanyAddedAssetCondition(address indexed asset, address indexed condition);
    event CompanyRemovedAssetCondition(address indexed asset);
    event CompanyAddedAssetHook(address indexed asset, address indexed hook);
    event CompanyRemovedAssetHook(address indexed asset);
    event CompanyAddedExperienceHook(address indexed experience, address indexed hook);
    event CompanyRemovedExperienceHook(address indexed experience);
    event CompanyJumpedForAvatar(address indexed avatar, uint256 indexed portalId, uint256 indexed fee);
    event CompanyUpgradedExperience(address indexed experience, address indexed nextVersion);
    event CompanyUpgradedAsset(address indexed asset, address indexed nextVersion);

    event CompanyUpgraded(address indexed oldVersion, address indexed nextVersion);
    event CompanyHookSet(address indexed hook);
    event CompanyHookRemoved();
    event AssetMinted(address indexed asset, address indexed to, uint256 indexed amountOrTokenId);
    event AssetRevoked(address indexed asset, address indexed holder, uint256 indexed amountOrTokenId);
    event CompanyDeactivated();
    event CompanyReactivated();

    /**
        * @dev Returns the address of the world in which the company operates.
     */
    function world() external view returns (address);

    /**
     * @dev Returns the vector address of the company. The vector address is assigned by
     * the operating World.
     */
    function vectorAddress() external view returns (VectorAddress memory);

    /**
     * @dev Returns whether this company can mint the given asset to the given address.
     * The data parameter is dependent on the type of asset.
     */
    function canMint(address asset, address to, bytes calldata data) external view returns (bool);
    
    /**
     * @dev Adds an experience to the world. This also creates a portal into the 
     * experience and registers it in the PortalRegistry. It is assumed that the 
     * initialization data for the experience will include the expected fee
     * for the portal.
     */
    function addExperience(AddExperienceArgs memory args) external;

    /**
     * @dev Removes an experience from the world. This also removes the portal into the 
     * experience and unregisters it from the PortalRegistry. This can only be called
     * by company admin
     */
    function removeExperience(address experience) external;


    /**
     * @dev Check whether this company owns the experience attached to the given portal id
     */
    function companyOwnsDestinationPortal(uint256 portalId) external view returns (bool);

    /**
     * @dev Mints the given amount of the given asset to the given address. The data
     * parameter is dependent on the type of asset.
     */
    function mint(address asset, address to, bytes calldata data) external;

    /**
     * @dev Revokes the given amount of the given asset from the given address. The data
     * parameter is dependent on the type of asset. This is likely called when an avatar
     * owner transfers the original asset on another chain (i.e. all assets in the 
     * interoperability layer are synthetic assets that represent assets on other chains).
     */
    function revoke(address asset, address holder, bytes calldata data) external;

    /**
     * @dev Withdraws the given amount of funds from the company. Only the owner can withdraw funds.
     */
    function withdraw(uint256 amount) external;

    /**
     * @dev Adds an experience condition to an experience. Going through the company
     * contract provides the necessary authorization checks and that only the experience
     * owner can add conditions.
     */
    function addExperienceCondition(address experience, address condition) external;

    /**
     * @dev Removes an experience condition from an experience
     */
    function removeExperienceCondition(address experience) external;

    /**
     * @dev Changes the fee associated with a portal to an experience owned by the company.
     * Going through the company provides appropriate authorization checks.
     */
    function changeExperiencePortalFee(address experience, uint256 fee) external;

    /**
     * @dev Adds an asset condition to an asset. Going through the company
     * contract provides the necessary authorization checks and that only the asset
     * issuer can add conditions.
     */
    function addAssetCondition(address asset, address condition) external;

    /**
     * @dev Removes an asset condition from an asset
     */
    function removeAssetCondition(address asset) external;

    /**
     * @dev Delegates a jump for an avatar to the company. This allows the company to
     * pay the transaction fee but charge the avatar owner for the jump. This is useful
     * for companies that want to offer free jumps to avatars but charge them for the
     * experience.
     */
    function delegateJumpForAvatar(DelegatedAvatarJumpRequest calldata request) external;
    
    /**
     * @dev Upgrades the experience to the next version. Only the owner can upgrade the experience.
     */
    function upgradeExperience(address experience, bytes memory initData) external;

    /**
     * @dev Upgrades the asset to the next version. Only the owner can upgrade the asset.
     */
    function upgradeAsset(address asset, bytes memory initData) external;
}