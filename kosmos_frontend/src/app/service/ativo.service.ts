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
      { nome: 'NOME', precoAtual: 20.00, valorAbertura: 15.00, valorFechamento: 27.00, descricao: 'descriçao do ativo' }
    ];
    return of(ativos);
  }
}
