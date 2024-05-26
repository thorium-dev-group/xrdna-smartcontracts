/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRegistrarRegistry,
  IRegistrarRegistryInterface,
} from "../../contracts/IRegistrarRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "registrarId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
    ],
    name: "addSigners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isRegistrar",
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
        internalType: "address payable",
        name: "signer",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "registrarId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
    ],
    name: "removeSigners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRegistrarRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IRegistrarRegistryInterface {
    return new Interface(_abi) as IRegistrarRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRegistrarRegistry {
    return new Contract(address, _abi, runner) as unknown as IRegistrarRegistry;
  }
}
