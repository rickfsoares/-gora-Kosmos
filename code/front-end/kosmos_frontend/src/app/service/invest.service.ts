import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HttpClient } from '@angular/common/http';


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
  private baseUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getInvestimentos() {
    const url = `${this.baseUrl}/investments`
    return this.http.get(url);
  }

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

  venderInvestimento(nome: string, quantidade: number): Observable<void> {
    const investimento = this.investimentoSubject.getValue();
    if (investimento.nome === nome && investimento.quantidade >= quantidade) {
      this.investimentoSubject.next({
        ...investimento,
        quantidade: investimento.quantidade - quantidade
      });
      return new Observable<void>();
    } else {
      return new Observable<void>(subscriber => {
        subscriber.error('Quantidade insuficiente');
      });
    }
  }
}
