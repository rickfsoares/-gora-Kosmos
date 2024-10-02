export class UserAtualizado {
  nome= "taw ham balbino";
  email= "teste2@gmail.com";
  endereco= "rua Jonas da Silva";
  uf= "PB";
  cidade= "Bayeux";
  profissao= "TI";
  renda= 1250;
  estadoCivil="solteiro(a)";
  telefone= "12345678901";
  cep= "12345678"

  constructor(nome: string, email: string, endereco: string, uf: string, cidade: string, profissao: string, renda: number, estadoCivil: string, telefone: string, cep: string) {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.uf = uf;
    this.cidade = cidade;
    this.profissao = profissao;
    this.renda = renda;
    this.estadoCivil = estadoCivil;
    this.telefone = telefone;
    this.cep = cep;
  }
}
