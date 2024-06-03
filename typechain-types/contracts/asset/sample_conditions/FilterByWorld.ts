/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface FilterByWorldInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addWorld"
      | "allowedWorlds"
      | "canUse"
      | "canView"
      | "removeWorld"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addWorld",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedWorlds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canUse",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canView",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWorld",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addWorld", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedWorlds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canUse", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canView", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWorld",
    data: BytesLike
  ): Result;
}

export interface FilterByWorld extends BaseContract {
  connect(runner?: ContractRunner | null): FilterByWorld;
  waitForDeployment(): Promise<this>;

  interface: FilterByWorldInterface;

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

  addWorld: TypedContractMethod<[world: AddressLike], [void], "nonpayable">;

  allowedWorlds: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  canUse: TypedContractMethod<
    [
      arg0: AddressLike,
      world: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike
    ],
    [boolean],
    "view"
  >;

  canView: TypedContractMethod<
    [
      arg0: AddressLike,
      world: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike
    ],
    [boolean],
    "view"
  >;

  removeWorld: TypedContractMethod<[world: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addWorld"
  ): TypedContractMethod<[world: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowedWorlds"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "canUse"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      world: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "canView"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      world: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeWorld"
  ): TypedContractMethod<[world: AddressLike], [void], "nonpayable">;

  filters: {};
}