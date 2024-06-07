/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IExperienceRegistry,
  IExperienceRegistryInterface,
} from "../../../../contracts/asset/BaseAsset.sol/IExperienceRegistry";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "x",
            type: "string",
          },
          {
            internalType: "string",
            name: "y",
            type: "string",
          },
          {
            internalType: "string",
            name: "z",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "t",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "p",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "p_sub",
            type: "uint256",
          },
        ],
        internalType: "struct VectorAddress",
        name: "va",
        type: "tuple",
      },
    ],
    name: "getExperienceByVector",
    outputs: [
      {
        internalType: "contract IExperience",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IExperienceRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IExperienceRegistryInterface {
    return new Interface(_abi) as IExperienceRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IExperienceRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IExperienceRegistry;
  }
}