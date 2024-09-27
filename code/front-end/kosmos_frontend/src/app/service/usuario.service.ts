import { Injectable } from '@angular/core';
import { ContaUsuario } from './transferencia.service';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //MOCK
  usuarioMock: Usuario = {
    id: 0,
    nome: 'Jonas Ariel',
    cpf: '12345678900',
    email: 'jonas.medeiros@academico.ifpb.edu.br',
    telefone: '(83) 98888-1111',
    profissao: 'engenheiro de software',
    estadoCivil: 'casado',
    endereco: 'rua das alamedas, 250. Jaguaribe. João Pessoa - PB',
    conta: new ContaUsuario()
  }
  usuarios: Array<Usuario> = [this.usuarioMock]

  private userInfo: UserInfo = new UserInfo(0, '', '', false);
  private infoSaldo: string = '0.00';
  constructor() { }

  atualiza(usuario: Usuario): Promise<void>{
    //TODO método que atualiza usuário
    const id = usuario.id
    if (this.usuarios[id]){
      this.usuarios[id] = usuario;
      return Promise.resolve();
    }
    return Promise.reject()
  }

  getUsuarioById(id: number): Promise<Usuario>{
    //TODO chamada do backend para pegar usuário
    return Promise.resolve(this.usuarios[id])
  }

  setInfoSaldo(saldo: string): void {
    this.infoSaldo = saldo;
  }

  setUserInfo(userInfo: UserInfo): void {
    this.userInfo = userInfo;
  }

  getUserInfo(): UserInfo {
    return this.userInfo;
  }

  getInfoSaldo(): string {
    return this.infoSaldo;
  }
}

export interface Usuario{
  id: number
  nome: string,
  cpf: string,
  email: string,
  telefone: string,
  profissao: string,
  estadoCivil: string,
  endereco: string;
  conta: ContaUsuario
}

export enum EstadoCivilEnum {
  CASADO = 'casado',
  SOLTEIRO = 'solteiro',
  DIVORCIADO = 'divorciado'
}
