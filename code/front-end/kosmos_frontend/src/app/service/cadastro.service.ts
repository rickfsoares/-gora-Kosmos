import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCadastro } from '../models/user-cadastro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  private baseUrl = "http://localhost:3000/api";

  private dadosCadastro: any = {};

  constructor(private http: HttpClient) {}

  setDados(dados: any) {
    this.dadosCadastro = { ...this.dadosCadastro, ...dados };
  }

  setDadosOnBack(dados: UserCadastro): Observable<UserCadastro> {

    const URL = `${this.baseUrl}/signup`;

    const userCadastrado = {user: {...dados}}

    return this.http.post<UserCadastro>(URL, userCadastrado);

  }

  getDados() {
    return this.dadosCadastro;
  }
}
