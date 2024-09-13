import { Stock } from "./stock";

export class Investment {

  public id: number;
  public user_id: number;
  public stock_id: number;
  public quantidade: number;
  public created_at: string;
  public updated_at: string;
  public stock: Stock;

  constructor(id:number, user_id: number, stock_id:number, quantidade:number, created_at:string, updated_at:string, stock: Stock) {
    this.id = id;
    this.user_id = user_id;
    this.stock_id = stock_id;
    this.quantidade = quantidade;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.stock = stock;
  }
}
