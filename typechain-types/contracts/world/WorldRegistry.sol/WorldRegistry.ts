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
} from "../../../common";

export type VectorAddressStruct = {
  x: string;
  y: string;
  z: string;
  t: BigNumberish;
  p: BigNumberish;
  p_sub: BigNumberish;
};

export type VectorAddressStructOutput = [
  x: string,
  y: string,
  z: string,
  t: bigint,
  p: bigint,
  p_sub: bigint
] & { x: string; y: string; z: string; t: bigint; p: bigint; p_sub: bigint };

export interface WorldRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isWorld"
      | "register"
      | "registrarRegistry"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "upgradeWorld"
      | "worldFactory"
      | "worldsByContractAddress"
      | "worldsByName"
      | "worldsVectorAddress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "WorldRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWorld",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BigNumberish, AddressLike, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "registrarRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeWorld",
    values: [BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "worldFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "worldsByContractAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "worldsByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "worldsVectorAddress",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isWorld", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registrarRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeWorld",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "worldFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "worldsByContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "worldsByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "worldsVectorAddress",
    data: BytesLike
  ): Result;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WorldRegisteredEvent {
  export type InputTuple = [
    world: AddressLike,
    owner: AddressLike,
    vectorAddress: VectorAddressStruct
  ];
  export type OutputTuple = [
    world: string,
    owner: string,
    vectorAddress: VectorAddressStructOutput
  ];
  export interface OutputObject {
    world: string;
    owner: string;
    vectorAddress: VectorAddressStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface WorldRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): WorldRegistry;
  waitForDeployment(): Promise<this>;

  interface: WorldRegistryInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isWorld: TypedContractMethod<[world: AddressLike], [boolean], "view">;

  register: TypedContractMethod<
    [
      registrarId: BigNumberish,
      _owner: AddressLike,
      initData: BytesLike,
      tokensToOwner: boolean
    ],
    [void],
    "payable"
  >;

  registrarRegistry: TypedContractMethod<[], [string], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  upgradeWorld: TypedContractMethod<
    [registrarId: BigNumberish, oldWorld: AddressLike, initData: BytesLike],
    [void],
    "nonpayable"
  >;

  worldFactory: TypedContractMethod<[], [string], "view">;

  worldsByContractAddress: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  worldsByName: TypedContractMethod<[arg0: string], [string], "view">;

  worldsVectorAddress: TypedContractMethod<[arg0: string], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isWorld"
  ): TypedContractMethod<[world: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [
      registrarId: BigNumberish,
      _owner: AddressLike,
      initData: BytesLike,
      tokensToOwner: boolean
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "registrarRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "upgradeWorld"
  ): TypedContractMethod<
    [registrarId: BigNumberish, oldWorld: AddressLike, initData: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "worldFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "worldsByContractAddress"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "worldsByName"
  ): TypedContractMethod<[arg0: string], [string], "view">;
  getFunction(
    nameOrSignature: "worldsVectorAddress"
  ): TypedContractMethod<[arg0: string], [string], "view">;

  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "WorldRegistered"
  ): TypedContractEvent<
    WorldRegisteredEvent.InputTuple,
    WorldRegisteredEvent.OutputTuple,
    WorldRegisteredEvent.OutputObject
  >;

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "WorldRegistered(address,address,tuple)": TypedContractEvent<
      WorldRegisteredEvent.InputTuple,
      WorldRegisteredEvent.OutputTuple,
      WorldRegisteredEvent.OutputObject
    >;
    WorldRegistered: TypedContractEvent<
      WorldRegisteredEvent.InputTuple,
      WorldRegisteredEvent.OutputTuple,
      WorldRegisteredEvent.OutputObject
    >;
  };
}
