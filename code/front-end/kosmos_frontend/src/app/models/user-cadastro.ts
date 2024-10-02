export class UserCadastro {
        email = "";
        password = "";
        nome = "";
        cpf = "";
        endereco = "";
        uf = "";
        cidade = "";
        apelido = "";
        profissao = "";
        renda = 0;
        estadoCivil = "";
        telefone = "";
        cep = "";

        constructor(email: string, password: string, nome:string, cpf: string, endereco: string, uf:string, cidade: string, apelido: string, profissao: string, renda: number, estadoCivil: string, telefone: string, cep: string) {
          this.email = email;
          this.password = password;
          this.nome = nome;
          this.cpf = cpf;
          this.endereco = endereco;
          this.uf = uf;
          this.cidade = cidade;
          this.apelido = apelido;
          this.profissao = profissao;
          this.renda = renda;
          this.estadoCivil = estadoCivil;
          this.telefone = telefone;
          this.cep = cep;
        }

}
