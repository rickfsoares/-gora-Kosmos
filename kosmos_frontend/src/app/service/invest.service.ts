import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Investimento {
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestService {
  private investimentoSubject = new BehaviorSubject<Investimento>({
    nome: 'Ativo X',
    descricao: 'Descrição do ativo',
    quantidade: 1,
    preco: 34.40
  });

  investimento$ = this.investimentoSubject.asObservable();

  comprarInvestimento(quantidade: number) {
    const investimento = this.investimentoSubject.getValue();
    this.investimentoSubject.next({
      ...investimento,
      quantidade: investimento.quantidade + quantidade
    });
  }
}
