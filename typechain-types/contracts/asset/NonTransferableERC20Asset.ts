/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type ERC20InitDataStruct = {
  originChainAddress: AddressLike;
  issuer: AddressLike;
  decimals: BigNumberish;
  originChainId: BigNumberish;
  totalSupply: BigNumberish;
  name: string;
  symbol: string;
};

export type ERC20InitDataStructOutput = [
  originChainAddress: string,
  issuer: string,
  decimals: bigint,
  originChainId: bigint,
  totalSupply: bigint,
  name: string,
  symbol: string
] & {
  originChainAddress: string;
  issuer: string;
  decimals: bigint;
  originChainId: bigint;
  totalSupply: bigint;
  name: string;
  symbol: string;
};

export interface NonTransferableERC20AssetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "allowance"
      | "approve"
      | "assetFactory"
      | "assetRegistry"
      | "balanceOf"
      | "decimals"
      | "encodeInitData"
      | "init"
      | "issuer"
      | "mint"
      | "name"
      | "originChainAddress"
      | "originChainId"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "upgrade"
      | "upgraded"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "ERC20Minted"
      | "ERC20Upgraded"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "encodeInitData",
    values: [ERC20InitDataStruct]
  ): string;
  encodeFunctionData(functionFragment: "init", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "issuer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "originChainAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "originChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "upgraded", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "encodeInitData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issuer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originChainAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "originChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgraded", data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ERC20MintedEvent {
  export type InputTuple = [to: AddressLike, amt: BigNumberish];
  export type OutputTuple = [to: string, amt: bigint];
  export interface OutputObject {
    to: string;
    amt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ERC20UpgradedEvent {
  export type InputTuple = [oldAsset: AddressLike, newAsset: AddressLike];
  export type OutputTuple = [oldAsset: string, newAsset: string];
  export interface OutputObject {
    oldAsset: string;
    newAsset: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NonTransferableERC20Asset extends BaseContract {
  connect(runner?: ContractRunner | null): NonTransferableERC20Asset;
  waitForDeployment(): Promise<this>;

  interface: NonTransferableERC20AssetInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  assetFactory: TypedContractMethod<[], [string], "view">;

  assetRegistry: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  encodeInitData: TypedContractMethod<
    [data: ERC20InitDataStruct],
    [string],
    "view"
  >;

  init: TypedContractMethod<[initData: BytesLike], [void], "nonpayable">;

  issuer: TypedContractMethod<[], [string], "view">;

  mint: TypedContractMethod<
    [to: AddressLike, amt: BigNumberish],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  originChainAddress: TypedContractMethod<[], [string], "view">;

  originChainId: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  upgrade: TypedContractMethod<[newAsset: AddressLike], [void], "nonpayable">;

  upgraded: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "assetFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assetRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "encodeInitData"
  ): TypedContractMethod<[data: ERC20InitDataStruct], [string], "view">;
  getFunction(
    nameOrSignature: "init"
  ): TypedContractMethod<[initData: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "issuer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [to: AddressLike, amt: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "originChainAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "originChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgrade"
  ): TypedContractMethod<[newAsset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgraded"
  ): TypedContractMethod<[], [boolean], "view">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "ERC20Minted"
  ): TypedContractEvent<
    ERC20MintedEvent.InputTuple,
    ERC20MintedEvent.OutputTuple,
    ERC20MintedEvent.OutputObject
  >;
  getEvent(
    key: "ERC20Upgraded"
  ): TypedContractEvent<
    ERC20UpgradedEvent.InputTuple,
    ERC20UpgradedEvent.OutputTuple,
    ERC20UpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "ERC20Minted(address,uint256)": TypedContractEvent<
      ERC20MintedEvent.InputTuple,
      ERC20MintedEvent.OutputTuple,
      ERC20MintedEvent.OutputObject
    >;
    ERC20Minted: TypedContractEvent<
      ERC20MintedEvent.InputTuple,
      ERC20MintedEvent.OutputTuple,
      ERC20MintedEvent.OutputObject
    >;

    "ERC20Upgraded(address,address)": TypedContractEvent<
      ERC20UpgradedEvent.InputTuple,
      ERC20UpgradedEvent.OutputTuple,
      ERC20UpgradedEvent.OutputObject
    >;
    ERC20Upgraded: TypedContractEvent<
      ERC20UpgradedEvent.InputTuple,
      ERC20UpgradedEvent.OutputTuple,
      ERC20UpgradedEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}