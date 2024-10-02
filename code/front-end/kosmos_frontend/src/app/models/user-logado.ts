export class UserLogado {
    id= 0;
    email= "";
    endereco= "";
    uf= "";
    cidade= "";
    apelido= "";
    estadoCivil= "";
    profissao= "";
    renda= "";
    saldo= "";
    cpf= "";
    telefone= "";
    nome= "";
    cep= "";
    premium= false;
    xp= 0;
    level_id= 1;
    investimentos= 0

    constructor(id: number, email: string, endereco: string, uf: string, cidade: string, apelido: string, estadoCivil: string, profissao: string, renda: string, saldo: string, cpf: string, telefone: string, nome: string, cep: string, premium: boolean, xp: number, level_id: number, investimentos: number) {
      this.id = id;
      this.email = email;
      this.endereco = endereco;
      this.uf = uf;
      this.cidade = cidade;
      this.apelido = apelido;
      this.estadoCivil = estadoCivil;
      this.profissao = profissao;
      this.renda = renda;
      this.saldo = saldo;
      this.cpf = cpf;
      this.telefone = telefone;
      this.nome = nome;
      this.cep = cep;
      this.premium = premium;
      this.xp = xp;
      this.level_id = level_id;
      this.investimentos = investimentos;
    }
}
