export class UserInfo {
  public id: number;
  public apelido: string;
  public saldo: string;
  public premium: any;

  constructor(id: number, apelido: string, saldo: string, premium: any) {
    this.id = id;
    this.apelido = apelido;
    this.saldo = saldo;
    this.premium = premium;
  }
}
