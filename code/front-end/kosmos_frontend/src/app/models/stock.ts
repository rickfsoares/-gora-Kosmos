export class Stock {

  public id: number;
  public nome: string;
  public descricao: string;
  public cotacao: number;
  public volume: number;
  public created_at: string;
  public updated_at: string;
  public opening_price: number;
  public closing_price: number;

  constructor(id: number, nome:string, descricao: string, cotacao: number, volume: number, created_at: string, updated_at: string, opening_price: number, closing_price: number) {

    this.cotacao = cotacao;
    this.created_at = created_at;
    this.descricao = descricao;
    this.id = id;
    this.nome = nome;
    this.updated_at = updated_at;
    this.volume = volume;
    this.opening_price = opening_price;
    this.closing_price = closing_price;

  }
}
