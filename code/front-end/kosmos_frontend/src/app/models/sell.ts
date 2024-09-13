export class Sell {
  public investment_id: number;
  public quantity: number;

  constructor(investment_id:number, quantity:number) {
    this.investment_id = investment_id;
    this.quantity = quantity;
  }
}
