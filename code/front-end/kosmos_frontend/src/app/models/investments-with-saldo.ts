import { Investment } from "./investment";

export class InvestmentsWithSaldo {
  public investments: Investment[];
  public saldo: string;

  constructor(investments: Investment[], saldo: string) {
    this.investments = investments;
    this.saldo = saldo;
  }
}
