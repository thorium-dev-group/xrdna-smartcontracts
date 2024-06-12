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
import type { NonPayableOverrides } from "../../../../common";
import type {
  ERC20AssetRegistry,
  ERC20AssetRegistryInterface,
} from "../../../../contracts/asset/erc20/ERC20AssetRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "mainAdmin",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "admins",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "factory",
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
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
    ],
    name: "ERC20AssetCreated",
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
    name: "ADMIN_ROLE",
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
    inputs: [
      {
        internalType: "address",
        name: "original",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "assetExists",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "assetsByOriginalAddressAndChain",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentAssetVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "removeAsset",
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
        name: "factory",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "upgradeAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014b8380380620014b8833981016040819052620000349162000346565b8282826001600160a01b038116620000b95760405162461bcd60e51b815260206004820152603360248201527f417373657452656769737472793a20617373657420666163746f72792063616e60448201527f6e6f74206265207a65726f20616464726573730000000000000000000000000060648201526084015b60405180910390fd5b6001600160a01b0383166200012a5760405162461bcd60e51b815260206004820152603060248201527f417373657452656769737472793a206d61696e2061646d696e2063616e6e6f7460448201526f206265207a65726f206164647265737360801b6064820152608401620000b0565b6200013760008462000264565b5062000153600080516020620014988339815191528462000264565b50600180546001600160a01b0319166001600160a01b03831617905560005b8251811015620002575760006001600160a01b03168382815181106200019c576200019c62000441565b60200260200101516001600160a01b031603620002105760405162461bcd60e51b815260206004820152602b60248201527f417373657452656769737472793a2061646d696e2063616e6e6f74206265207a60448201526a65726f206164647265737360a81b6064820152608401620000b0565b6200024d6000805160206200149883398151915284838151811062000239576200023962000441565b60200260200101516200026460201b60201c565b5060010162000172565b5050505050505062000457565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000309576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002c03390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200030d565b5060005b92915050565b80516001600160a01b03811681146200032b57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156200035c57600080fd5b620003678462000313565b602085810151919450906001600160401b03808211156200038757600080fd5b818701915087601f8301126200039c57600080fd5b815181811115620003b157620003b162000330565b8060051b604051601f19603f83011681018181108582111715620003d957620003d962000330565b60405291825284820192508381018501918a831115620003f857600080fd5b938501935b828510156200042157620004118562000313565b84529385019392850192620003fd565b809750505050505050620004386040850162000313565b90509250925092565b634e487b7160e01b600052603260045260246000fd5b61103180620004676000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063a217fddf116100a2578063c73c4a8911610071578063c73c4a89146102bf578063c8f4fe0f146102d2578063d547741f146102e5578063eea99a42146102f8578063f87115361461032157600080fd5b8063a217fddf14610258578063adec561814610260578063c2ee64bc1461028c578063c3acb4d11461029457600080fd5b80633cbd4293116100e95780633cbd42931461019c5780633fe7fd92146101af5780634a5e42b11461021d57806375b238fc1461023057806391d148541461024557600080fd5b806301ffc9a71461011b578063248a9ca3146101435780632f2ff15d1461017457806336568abe14610189575b600080fd5b61012e610129366004610da3565b610344565b60405190151581526020015b60405180910390f35b610166610151366004610dd4565b60009081526020819052604090206001015490565b60405190815260200161013a565b610187610182366004610e02565b61037b565b005b610187610197366004610e02565b6103a6565b6101876101aa366004610e32565b6103de565b61012e6101bd366004610ea4565b6040805160609390931b6bffffffffffffffffffffffff19166020808501919091526034808501939093528151808503909301835260549093018152815191830191909120600090815260029092529020546001600160a01b0316151590565b61018761022b366004610ed0565b6104ba565b610166600080516020610fdc83398151915281565b61012e610253366004610e02565b610693565b610166600081565b61012e61026e366004610ed0565b6001600160a01b031660009081526003602052604090205460ff1690565b6101666106bc565b6001546102a7906001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b6102a76102cd366004610e32565b61072f565b6101876102e0366004610ed0565b610b6f565b6101876102f3366004610e02565b610c37565b6102a7610306366004610dd4565b6002602052600090815260409020546001600160a01b031681565b61012e61032f366004610ed0565b60036020526000908152604090205460ff1681565b60006001600160e01b03198216637965db0b60e01b148061037557506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008281526020819052604090206001015461039681610c5c565b6103a08383610c69565b50505050565b6001600160a01b03811633146103cf5760405163334bd91960e11b815260040160405180910390fd5b6103d98282610cfb565b505050565b3360009081526003602052604090205460ff166104505760405162461bcd60e51b815260206004820152602560248201527f417373657452656769737472793a2063616c6c6572206973206e6f7420616e20604482015264185cdcd95d60da1b60648201526084015b60405180910390fd5b600154604051632d012d9d60e21b81526001600160a01b039091169063b404b6749061048490339086908690600401610f16565b600060405180830381600087803b15801561049e57600080fd5b505af11580156104b2573d6000803e3d6000fd5b505050505050565b6104d2600080516020610fdc83398151915233610693565b6104ee5760405162461bcd60e51b815260040161044790610f44565b6001600160a01b03811660009081526003602052604090205460ff166105625760405162461bcd60e51b815260206004820152602360248201527f417373657452656769737472793a206173736574206e6f7420726567697374656044820152621c995960ea1b6064820152608401610447565b6001600160a01b0381166000818152600360209081526040808320805460ff19169055805163e517fedd60e01b8152905185949263e517fedd92600480820193918290030181865afa1580156105bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e09190610f89565b826001600160a01b0316630ac7f5616040518163ffffffff1660e01b8152600401602060405180830381865afa15801561061e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106429190610fa6565b604080516001600160a01b03909316602084015282015260600160408051601f19818403018152918152815160209283012060009081526002909252902080546001600160a01b0319169055505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6001546040805163e921c27560e01b815290516000926001600160a01b03169163e921c2759160048083019260209291908290030181865afa158015610706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072a9190610fa6565b905090565b6000610749600080516020610fdc83398151915233610693565b6107655760405162461bcd60e51b815260040161044790610f44565b6001546001600160a01b03166107c95760405162461bcd60e51b8152602060048201526024808201527f417373657452656769737472793a20617373657420666163746f7279206e6f74604482015263081cd95d60e21b6064820152608401610447565b60015460405163117b320760e31b81526001600160a01b0390911690638bd99038906107fb9086908690600401610fbf565b6020604051808303816000875af115801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190610f89565b905060008190506000816001600160a01b031663e517fedd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a99190610f89565b826001600160a01b0316630ac7f5616040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b9190610fa6565b604080516001600160a01b03909316602084015282015260600160408051601f198184030181529181528151602092830120600081815260029093529120549091506001600160a01b0316156109b35760405162461bcd60e51b815260206004820152602760248201527f417373657452656769737472793a20617373657420616c7265616479207265676044820152661a5cdd195c995960ca1b6064820152608401610447565b6001600160a01b038084166000818152600360209081526040808320805460ff19166001179055858352600282529182902080546001600160a01b031916909317909255805163e517fedd60e01b815290519285169263e517fedd926004808401939192918290030181865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190610f89565b6001600160a01b0316826001600160a01b0316631d1438486040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac09190610f89565b6001600160a01b0316846001600160a01b03167f22fe341e8ccd7490dc5b7ba863a90d1cb44abef5a65bac40690b4f49966823d1856001600160a01b0316630ac7f5616040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b569190610fa6565b60405190815260200160405180910390a4505092915050565b610b87600080516020610fdc83398151915233610693565b610ba35760405162461bcd60e51b815260040161044790610f44565b6001600160a01b038116610c155760405162461bcd60e51b815260206004820152603360248201527f417373657452656769737472793a20617373657420666163746f72792063616e6044820152726e6f74206265207a65726f206164647265737360681b6064820152608401610447565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600082815260208190526040902060010154610c5281610c5c565b6103a08383610cfb565b610c668133610d66565b50565b6000610c758383610693565b610cf3576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610cab3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610375565b506000610375565b6000610d078383610693565b15610cf3576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610375565b610d708282610693565b610d9f5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610447565b5050565b600060208284031215610db557600080fd5b81356001600160e01b031981168114610dcd57600080fd5b9392505050565b600060208284031215610de657600080fd5b5035919050565b6001600160a01b0381168114610c6657600080fd5b60008060408385031215610e1557600080fd5b823591506020830135610e2781610ded565b809150509250929050565b60008060208385031215610e4557600080fd5b823567ffffffffffffffff80821115610e5d57600080fd5b818501915085601f830112610e7157600080fd5b813581811115610e8057600080fd5b866020828501011115610e9257600080fd5b60209290920196919550909350505050565b60008060408385031215610eb757600080fd5b8235610ec281610ded565b946020939093013593505050565b600060208284031215610ee257600080fd5b8135610dcd81610ded565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0384168152604060208201819052600090610f3b9083018486610eed565b95945050505050565b60208082526025908201527f417373657452656769737472793a2063616c6c6572206973206e6f7420616e2060408201526430b236b4b760d91b606082015260800190565b600060208284031215610f9b57600080fd5b8151610dcd81610ded565b600060208284031215610fb857600080fd5b5051919050565b602081526000610fd3602083018486610eed565b94935050505056fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a264697066735822122011003a6ad55dca93dc0e21af3877050eeb40097f551376b52ac4cfdbd7d60a7564736f6c63430008180033a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";

type ERC20AssetRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AssetRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20AssetRegistry__factory extends ContractFactory {
  constructor(...args: ERC20AssetRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    mainAdmin: AddressLike,
    admins: AddressLike[],
    factory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      mainAdmin,
      admins,
      factory,
      overrides || {}
    );
  }
  override deploy(
    mainAdmin: AddressLike,
    admins: AddressLike[],
    factory: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(mainAdmin, admins, factory, overrides || {}) as Promise<
      ERC20AssetRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20AssetRegistry__factory {
    return super.connect(runner) as ERC20AssetRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AssetRegistryInterface {
    return new Interface(_abi) as ERC20AssetRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC20AssetRegistry {
    return new Contract(address, _abi, runner) as unknown as ERC20AssetRegistry;
  }
}
