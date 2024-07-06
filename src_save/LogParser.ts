import { AddressLike, Interface, TransactionReceipt } from "ethers";

export class LogParser {

    ifc: Interface;
    constructor(
        readonly abi: any,
        readonly contractAddress: AddressLike
    ) {
        this.ifc = new Interface(abi);
    }

    parseLogs(receipt: TransactionReceipt): Map<string, any> {
        const logs = receipt.logs;
        const parsedLogs = new Map<string, any>();
        logs.forEach((l:any) => {
            try {
                if(l.address.toLowerCase() !== this.contractAddress.toString().toLowerCase()) {
                    return;
                }
                const parsed = this.ifc.parseLog(l);

                if(parsed) {
                    parsedLogs.set(parsed.name, parsed.args);
                }
            } catch (e) {
                
                console.error("Error parsing log", e);
                console.log(l);
            }
        });
        return parsedLogs;
    }
}