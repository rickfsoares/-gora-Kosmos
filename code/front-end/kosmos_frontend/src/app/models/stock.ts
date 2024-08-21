export class Stock {

  public id: number;
  public nome: string;
  public descricao: string;
  public cotacao: number;
  public volume: number;
  public created_at: string;
  public updated_at: string;

  constructor(id: number, nome:string, descricao: string, cotacao: number, volume: number, created_at: string, updated_at: string) {

    this.cotacao = cotacao;
    this.created_at = created_at;
    this.descricao = descricao;
    this.id = id;
    this.nome = nome;
    this.updated_at = updated_at;
    this.volume = volume;

  }
}
