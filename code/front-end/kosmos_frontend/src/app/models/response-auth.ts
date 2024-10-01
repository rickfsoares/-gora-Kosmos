export class ResponseAuth {
  public token: string;
  public user: {
    id: 0,
    apelido: "",
    saldo: "",
    premium: null
  };

  constructor(token: string,
    user: {
     id: 0,
     apelido: "",
     saldo: "",
     premium: null
  }) {
    this.token = token;
    this.user = user;
  }
}
