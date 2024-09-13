export class Buy {
  public stock_id: number;
  public quantity: number;

  constructor(stock_id: number, quantity:number) {
    this.stock_id = stock_id;
    this.quantity = quantity;
  }
}
