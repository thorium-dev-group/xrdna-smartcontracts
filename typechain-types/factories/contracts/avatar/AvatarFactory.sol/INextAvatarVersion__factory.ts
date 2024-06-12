/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  INextAvatarVersion,
  INextAvatarVersionInterface,
} from "../../../../contracts/avatar/AvatarFactory.sol/INextAvatarVersion";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class INextAvatarVersion__factory {
  static readonly abi = _abi;
  static createInterface(): INextAvatarVersionInterface {
    return new Interface(_abi) as INextAvatarVersionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): INextAvatarVersion {
    return new Contract(address, _abi, runner) as unknown as INextAvatarVersion;
  }
}