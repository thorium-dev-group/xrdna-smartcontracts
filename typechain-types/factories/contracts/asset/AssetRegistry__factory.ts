/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AssetRegistry,
  AssetRegistryInterface,
} from "../../../contracts/asset/AssetRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "admins",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_assetFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
    ],
    name: "AssetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetFactory",
    outputs: [
      {
        internalType: "contract IAssetFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "isRegisteredAsset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "registerAsset",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registeredAssets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetFactory",
        type: "address",
      },
    ],
    name: "setAssetFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b8138038062000b81833981016040819052620000349162000298565b6001600160a01b038116620000b65760405162461bcd60e51b815260206004820152603360248201527f417373657452656769737472793a20617373657420666163746f72792063616e60448201527f6e6f74206265207a65726f20616464726573730000000000000000000000000060648201526084015b60405180910390fd5b600180546001600160a01b0319166001600160a01b03831617905560005b8251811015620001ad5760006001600160a01b0316838281518110620000fe57620000fe6200037e565b60200260200101516001600160a01b031603620001725760405162461bcd60e51b815260206004820152602b60248201527f417373657452656769737472793a2061646d696e2063616e6e6f74206265207a60448201526a65726f206164647265737360a81b6064820152608401620000ad565b620001a36000801b8483815181106200018f576200018f6200037e565b6020026020010151620001b660201b60201c565b50600101620000d4565b50505062000394565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166200025b576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002123390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200025f565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200029357600080fd5b919050565b60008060408385031215620002ac57600080fd5b82516001600160401b0380821115620002c457600080fd5b818501915085601f830112620002d957600080fd5b8151602082821115620002f057620002f062000265565b8160051b604051601f19603f8301168101818110868211171562000318576200031862000265565b6040529283528183019350848101820192898411156200033757600080fd5b948201945b83861015620003605762000350866200027b565b855294820194938201936200033c565b96506200037190508782016200027b565b9450505050509250929050565b634e487b7160e01b600052603260045260246000fd5b6107dd80620003a46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a71e33c811610071578063a71e33c814610155578063adec561814610180578063c3acb4d1146101ac578063c8f4fe0f146101bf578063d547741f146101d2578063f8711536146101e557600080fd5b806301ffc9a7146100b9578063248a9ca3146100e15780632f2ff15d1461011257806336568abe1461012757806391d148541461013a578063a217fddf1461014d575b600080fd5b6100cc6100c736600461062c565b610208565b60405190151581526020015b60405180910390f35b6101046100ef36600461065d565b60009081526020819052604090206001015490565b6040519081526020016100d8565b61012561012036600461068b565b61023f565b005b61012561013536600461068b565b61026a565b6100cc61014836600461068b565b6102a2565b610104600081565b6101686101633660046106bb565b6102cb565b6040516001600160a01b0390911681526020016100d8565b6100cc61018e366004610737565b6001600160a01b031660009081526002602052604090205460ff1690565b600154610168906001600160a01b031681565b6101256101cd366004610737565b610420565b6101256101e036600461068b565b6104c0565b6100cc6101f3366004610737565b60026020526000908152604090205460ff1681565b60006001600160e01b03198216637965db0b60e01b148061023957506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526020819052604090206001015461025a816104e5565b61026483836104f2565b50505050565b6001600160a01b03811633146102935760405163334bd91960e11b815260040160405180910390fd5b61029d8282610584565b505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000806102d7816104e5565b6001546001600160a01b03166103405760405162461bcd60e51b8152602060048201526024808201527f417373657452656769737472793a20617373657420666163746f7279206e6f74604482015263081cd95d60e21b60648201526084015b60405180910390fd5b6001546040516319efc5b360e21b81526001600160a01b03909116906367bf16cc9061037490889088908890600401610754565b6020604051808303816000875af1158015610393573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b7919061078a565b6001600160a01b03811660008181526002602052604090819020805460ff1916600117905551919350907f20df459a0f7f1bc64a42346a9e6536111a3512be01de7a0f5327a4e13b337038906104109088815260200190565b60405180910390a2509392505050565b600061042b816104e5565b6001600160a01b03821661049d5760405162461bcd60e51b815260206004820152603360248201527f417373657452656769737472793a20617373657420666163746f72792063616e6044820152726e6f74206265207a65726f206164647265737360681b6064820152608401610337565b50600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000828152602081905260409020600101546104db816104e5565b6102648383610584565b6104ef81336105ef565b50565b60006104fe83836102a2565b61057c576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556105343390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610239565b506000610239565b600061059083836102a2565b1561057c576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610239565b6105f982826102a2565b6106285760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610337565b5050565b60006020828403121561063e57600080fd5b81356001600160e01b03198116811461065657600080fd5b9392505050565b60006020828403121561066f57600080fd5b5035919050565b6001600160a01b03811681146104ef57600080fd5b6000806040838503121561069e57600080fd5b8235915060208301356106b081610676565b809150509250929050565b6000806000604084860312156106d057600080fd5b83359250602084013567ffffffffffffffff808211156106ef57600080fd5b818601915086601f83011261070357600080fd5b81358181111561071257600080fd5b87602082850101111561072457600080fd5b6020830194508093505050509250925092565b60006020828403121561074957600080fd5b813561065681610676565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60006020828403121561079c57600080fd5b81516106568161067656fea2646970667358221220b21a9082dbd7c11d15b8d567b88c5c176d8c5c551be04d8fe3ef64fb25359ed964736f6c63430008180033";

type AssetRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetRegistry__factory extends ContractFactory {
  constructor(...args: AssetRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    admins: AddressLike[],
    _assetFactory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(admins, _assetFactory, overrides || {});
  }
  override deploy(
    admins: AddressLike[],
    _assetFactory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(admins, _assetFactory, overrides || {}) as Promise<
      AssetRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AssetRegistry__factory {
    return super.connect(runner) as AssetRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetRegistryInterface {
    return new Interface(_abi) as AssetRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AssetRegistry {
    return new Contract(address, _abi, runner) as unknown as AssetRegistry;
  }
}