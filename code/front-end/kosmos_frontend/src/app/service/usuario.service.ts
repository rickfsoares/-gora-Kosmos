import { Injectable } from '@angular/core';
import { ContaUsuario } from './transferencia.service';
import { UserInfo } from '../models/user-info';
import { UserLogado } from '../models/user-logado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAtualizado } from '../models/user-atualizado';
import { Gemini } from '../models/gemini';
import { Mission } from '../models/mission';

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
  private baseUrl: string = "http://localhost:3000/api"

  private authToken = localStorage.getItem('authToken') || '';
  private header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});

  constructor(private http: HttpClient) { }

  atualiza(usuario: UserAtualizado): Observable<UserAtualizado> {
    const url = `${this.baseUrl}/account_update`;

    const usuarioCadastrado = {user: {...usuario}};
    return this.http.patch<UserAtualizado>(url, usuarioCadastrado,{headers : this.header});
  }

  getUsuarioById(id: number): Promise<Usuario>{
    //TODO chamada do backend para pegar usuário
    return Promise.resolve(this.usuarios[id])
  }

  getAllUserInfo(): Observable<UserLogado> {
    const url = `${this.baseUrl}/current_user`;
    return this.http.get<UserLogado>(url, {headers: this.header});
  }


  setUserInfo(userInfo: UserInfo): void {
    this.userInfo = userInfo;
    localStorage.setItem('saldo', this.userInfo.saldo);
  }

  private saveUserSaldo(saldo: string): void {
    localStorage.setItem('saldo', saldo);
  }

  getUserInfo(): UserInfo {
    this.userInfo.saldo = localStorage.getItem('saldo') || '';
    return this.userInfo;
  }

  sendMessageToGemini(message: string): Observable<Gemini> {
    const url = `${this.baseUrl}/gemini/index`;

    return this.http.post<Gemini>(url, {message: message}, {headers: this.header});
  }

  getMissions(): Observable<Mission[]> {
    const url = `${this.baseUrl}/mission`;

    return this.http.get<Mission[]>(url, {headers: this.header});

  }

  setUserToPremium(): Observable<any> {
    const url = `${this.baseUrl}/become_premium`;
    console.log('premium api');
    return this.http.patch<any>(url, {} , {headers: this.header});
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
