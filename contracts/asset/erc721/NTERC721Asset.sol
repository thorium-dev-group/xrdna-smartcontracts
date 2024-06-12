// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;


import {IERC721Errors} from "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {IERC721Metadata} from "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import {Strings} from '@openzeppelin/contracts/utils/Strings.sol';
import {BaseAsset, BaseAssetArgs} from '../BaseAsset.sol';
import {IMintableAsset} from '../IMintableAsset.sol';
import {CommonAssetV1Storage, ERC721V1Storage, LibAssetV1Storage} from '../../libraries/LibAssetV1Storage.sol';
import {IAssetRegistry} from '../IAssetRegistry.sol';
import {BaseProxyStorage, LibBaseProxy} from '../../libraries/LibBaseProxy.sol';
import {IAvatar} from '../../avatar/IAvatar.sol';

struct ERC721InitData {
    address issuer;
    address originChainAddress;
    uint256 originChainId;
    string name;
    string symbol;
    string baseURI;
}


interface IUpgradedERC721 {
    function setStartingTokenId(uint256 tokenId) external;
}

contract NTERC721Asset is BaseAsset, IMintableAsset, IERC721, IERC721Metadata, IERC721Errors {
    using Strings for uint256;

    
    uint256 public constant override version = 1;

    event ERC721Minted(address indexed to, uint256 tokenId);
    event ERC721Upgraded(address indexed oldAsset, address indexed newAsset);

    //called once when master-copy deployed
    constructor(BaseAssetArgs memory args) BaseAsset(args) {}

    function encodeInitData(ERC721InitData memory data) public pure returns (bytes memory) {
        return abi.encode(data);
    }

    function init(bytes memory initData) public onlyFactory {
        ERC721InitData memory data = abi.decode(initData, (ERC721InitData));
        require(data.issuer != address(0), "NTERC721: issuer is the zero address");
        require(bytes(data.name).length > 0, "NTERC721: name is empty");
        require(bytes(data.symbol).length > 0, "NTERC721: symbol is empty");
        require(bytes(data.baseURI).length > 0, "NTERC721: baseURI is empty");
        require(data.originChainAddress != address(0), "NTERC721: originChainAddress is the zero address");
        require(data.originChainId > 0, "NTERC721: originChainId is zero");
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        s.attributes.issuer = data.issuer;
        s.attributes.originAddress = data.originChainAddress;
        s.attributes.originChainId = data.originChainId;
        s.attributes.name = data.name;
        s.attributes.symbol = data.symbol;
        s.baseURI = data.baseURI;
    }

    function upgrade(bytes calldata data) public onlyIssuer {
        IAssetRegistry(assetRegistry).upgradeAsset(data);
    }

    function upgradeComplete(address nextVersion) public override onlyFactory {
        BaseProxyStorage storage ps = LibBaseProxy.load();
        address old = ps.implementation;
        ps.implementation = nextVersion;
        emit ERC721Upgraded(old, nextVersion);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual  returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }

    /**
     * @dev See {IERC721-balanceOf}.
     */
    function balanceOf(address owner) public view virtual returns (uint256) {
        if (owner == address(0)) {
            revert ERC721InvalidOwner(address(0));
        }
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        return s.balances[owner];
    }

    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 tokenId) public view virtual returns (address) {
        return _requireOwned(tokenId);
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view virtual returns (string memory) {
        return _loadCommonAttributes().name;
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view virtual returns (string memory) {
        return _loadCommonAttributes().symbol;
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {
        _requireOwned(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string.concat(baseURI, tokenId.toString()) : "";
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overridden in child contracts.
     */
    function _baseURI() internal view virtual returns (string memory) {
        return LibAssetV1Storage.loadERC721Storage().baseURI;
    }

    /**
     * @dev See {IERC721-approve}.
     */
    function approve(address, uint256) public virtual {
        revert("NTERC721: token is non-transferable");
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256 tokenId) public view virtual returns (address) {
        _requireOwned(tokenId);

        return _getApproved(tokenId);
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    function setApprovalForAll(address, bool) public virtual {
        revert("NTERC721: token is non-transferable");
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address owner, address operator) public view virtual returns (bool) {
        return LibAssetV1Storage.loadERC721Storage().operatorApprovals[owner][operator];
    }

    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(address, address, uint256) public virtual {
        revert("NTERC721: token is non-transferable");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(address from, address to, uint256 tokenId) public {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(address, address, uint256, bytes memory) public virtual {
        revert("NTERC721: token is non-transferable");
    }

    function canMint(address to, bytes calldata) public pure override returns (bool) {
        return to != address(0);
    }

    function mint(address to, bytes calldata) public nonReentrant onlyIssuer {
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        if(address(s.attributes.hook) != address(0)) {
            bool ok = s.attributes.hook.beforeMint(address(this), to, s.tokenIdCounter+1);
            if(!ok) {
                revert("NTERC721Asset: beforeMint hook rejected request");
            }
        }
        if(avatarRegistry.isAvatar(to)) {
            IAvatar avatar = IAvatar(to);
            if(!avatar.canReceiveTokensOutsideOfExperience()) {
                _verifyAvatarLocationMatchesIssuer(IAvatar(to));
            }
        }

        ++s.tokenIdCounter;
        uint256 id = s.tokenIdCounter;
        _safeMint(to, id);
    }

    function revoke(address holder, bytes calldata data) public nonReentrant onlyIssuer {
        (uint256 tokenId) = abi.decode(data, (uint256));
        require(holder != address(0), "NTERC721Asset: token does not exist");
        require(_ownerOf(tokenId) == holder, "NTERC721Asset: not the owner of token id provided");
        
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        if(address(s.attributes.hook) != address(0)) {
            bool ok = s.attributes.hook.beforeRevoke(address(this), holder, tokenId);
            if(!ok) {
                revert("NTERC721Asset: beforeMint hook rejected request");
            }
        }
        _burn(tokenId);
    }


    /**
     * @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn't exist
     *
     * IMPORTANT: Any overrides to this function that add ownership of tokens not tracked by the
     * core ERC721 logic MUST be matched with the use of {_increaseBalance} to keep balances
     * consistent with ownership. The invariant to preserve is that for any address `a` the value returned by
     * `balanceOf(a)` must be equal to the number of tokens such that `_ownerOf(tokenId)` is `a`.
     */
    function _ownerOf(uint256 tokenId) internal view virtual returns (address) {
        return LibAssetV1Storage.loadERC721Storage().owners[tokenId];
    }
    
    /**
     * @dev Returns the approved address for `tokenId`. Returns 0 if `tokenId` is not minted.
     */
    function _getApproved(uint256 tokenId) internal view virtual returns (address) {
        return LibAssetV1Storage.loadERC721Storage().tokenApprovals[tokenId];
    }

    /**
     * @dev Returns whether `spender` is allowed to manage `owner`'s tokens, or `tokenId` in
     * particular (ignoring whether it is owned by `owner`).
     *
     * WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this
     * assumption.
     */
    function _isAuthorized(address owner, address spender, uint256 tokenId) internal view virtual returns (bool) {
        return
            spender != address(0) &&
            (owner == spender || isApprovedForAll(owner, spender) || _getApproved(tokenId) == spender);
    }

    /**
     * @dev Checks if `spender` can operate on `tokenId`, assuming the provided `owner` is the actual owner.
     * Reverts if `spender` does not have approval from the provided `owner` for the given token or for all its assets
     * the `spender` for the specific `tokenId`.
     *
     * WARNING: This function assumes that `owner` is the actual owner of `tokenId` and does not verify this
     * assumption.
     */
    function _checkAuthorized(address owner, address spender, uint256 tokenId) internal view virtual {
        if (!_isAuthorized(owner, spender, tokenId)) {
            if (owner == address(0)) {
                revert ERC721NonexistentToken(tokenId);
            } else {
                revert ERC721InsufficientApproval(spender, tokenId);
            }
        }
    }

    /**
     * @dev Unsafe write access to the balances, used by extensions that "mint" tokens using an {ownerOf} override.
     *
     * NOTE: the value is limited to type(uint128).max. This protect against _balance overflow. It is unrealistic that
     * a uint256 would ever overflow from increments when these increments are bounded to uint128 values.
     *
     * WARNING: Increasing an account's balance using this function tends to be paired with an override of the
     * {_ownerOf} function to resolve the ownership of the corresponding tokens so that balances and ownership
     * remain consistent with one another.
     */
    function _increaseBalance(address account, uint128 value) internal virtual {
        unchecked {
            LibAssetV1Storage.loadERC721Storage().balances[account] += value;
        }
    }

    /**
     * @dev Transfers `tokenId` from its current owner to `to`, or alternatively mints (or burns) if the current owner
     * (or `to`) is the zero address. Returns the owner of the `tokenId` before the update.
     *
     * The `auth` argument is optional. If the value passed is non 0, then this function will check that
     * `auth` is either the owner of the token, or approved to operate on the token (by the owner).
     *
     * Emits a {Transfer} event.
     *
     * NOTE: If overriding this function in a way that tracks balances, see also {_increaseBalance}.
     */
    function _update(address to, uint256 tokenId, address auth) internal virtual returns (address) {
        address from = _ownerOf(tokenId);
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        // Perform (optional) operator check
        if (auth != address(0)) {
            _checkAuthorized(from, auth, tokenId);
        }

        // Execute the update
        if (from != address(0)) {
            // Clear approval. No need to re-authorize or emit the Approval event
            _approve(address(0), tokenId, address(0), false);

            unchecked {
                s.balances[from] -= 1;
            }
        }

        if (to != address(0)) {
            unchecked {
                s.balances[to] += 1;
            }
        }

        s.owners[tokenId] = to;

        emit Transfer(from, to, tokenId);

        return from;
    }

    

    /**
     * @dev Mints `tokenId` and transfers it to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - `to` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function _mint(address to, uint256 tokenId) internal {
        if (to == address(0)) {
            revert ERC721InvalidReceiver(address(0));
        }
        address previousOwner = _update(to, tokenId, address(0));
        if (previousOwner != address(0)) {
            revert ERC721InvalidSender(address(0));
        }
        emit ERC721Minted(to, tokenId);
    }

    /**
     * @dev Mints `tokenId`, transfers it to `to` and checks for `to` acceptance.
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function _safeMint(address to, uint256 tokenId) internal {
        _safeMint(to, tokenId, "");
    }

    /**
     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is
     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.
     */
    function _safeMint(address to, uint256 tokenId, bytes memory data) internal virtual {
        _mint(to, tokenId);
        _checkOnERC721Received(address(0), to, tokenId, data);
    }

    /**
     * @dev Destroys `tokenId`.
     * The approval is cleared when the token is burned.
     * This is an internal function that does not check if the sender is authorized to operate on the token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     *
     * Emits a {Transfer} event.
     */
    function _burn(uint256 tokenId) internal {
        address previousOwner = _update(address(0), tokenId, address(0));
        if (previousOwner == address(0)) {
            revert ERC721NonexistentToken(tokenId);
        }
    }



    /**
     * @dev Reverts if the `tokenId` doesn't have a current owner (it hasn't been minted, or it has been burned).
     * Returns the owner.
     *
     * Overrides to ownership logic should be done to {_ownerOf}.
     */
    function _requireOwned(uint256 tokenId) internal view returns (address) {
        address owner = _ownerOf(tokenId);
        if (owner == address(0)) {
            revert ERC721NonexistentToken(tokenId);
        }
        return owner;
    }

    /**
     * @dev Private function to invoke {IERC721Receiver-onERC721Received} on a target address. This will revert if the
     * recipient doesn't accept the token transfer. The call is not executed if the target address is not a contract.
     *
     * @param from address representing the previous owner of the given token ID
     * @param to target address that will receive the tokens
     * @param tokenId uint256 ID of the token to be transferred
     * @param data bytes optional data to send along with the call
     */
    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory data) private {
        if (to.code.length > 0) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {
                if (retval != IERC721Receiver.onERC721Received.selector) {
                    revert ERC721InvalidReceiver(to);
                }
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert ERC721InvalidReceiver(to);
                } else {
                    /// @solidity memory-safe-assembly
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        }
    }


    /**
     * @dev Approve `to` to operate on `tokenId`
     *
     * The `auth` argument is optional. If the value passed is non 0, then this function will check that `auth` is
     * either the owner of the token, or approved to operate on all tokens held by this owner.
     *
     * Emits an {Approval} event.
     *
     * Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument.
     */
    function _approve(address to, uint256 tokenId, address auth) internal {
        _approve(to, tokenId, auth, true);
    }

    /**
     * @dev Variant of `_approve` with an optional flag to enable or disable the {Approval} event. The event is not
     * emitted in the context of transfers.
     */
    function _approve(address to, uint256 tokenId, address auth, bool emitEvent) internal virtual {
        // Avoid reading the owner unless necessary
        if (emitEvent || auth != address(0)) {
            address owner = _requireOwned(tokenId);

            // We do not use _isAuthorized because single-token approvals should not be able to call approve
            if (auth != address(0) && owner != auth && !isApprovedForAll(owner, auth)) {
                revert ERC721InvalidApprover(auth);
            }

            if (emitEvent) {
                emit Approval(owner, to, tokenId);
            }
        }
        ERC721V1Storage storage s = LibAssetV1Storage.loadERC721Storage();
        s.tokenApprovals[tokenId] = to;
    }

    function _loadCommonAttributes() internal view override returns (CommonAssetV1Storage storage) {
        return LibAssetV1Storage.loadERC721Storage().attributes;
    }




}