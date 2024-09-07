import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ativo {
  nome: string;
  precoAtual: number;
  valorAbertura: number;
  valorFechamento: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  constructor() { }

  getAtivos(): Observable<Ativo[]> {
    const ativos: Ativo[] = [
      { nome: 'Ativo 1', precoAtual: 20.00, valorAbertura: 15.00, valorFechamento: 27.00, descricao: 'descriçao do ativo' },
      { nome: 'Ativo 2', precoAtual: 35.00, valorAbertura: 30.00, valorFechamento: 40.00, descricao: 'Descrição do Ativo 2'}
    ];
    return of(ativos);

  }


}
