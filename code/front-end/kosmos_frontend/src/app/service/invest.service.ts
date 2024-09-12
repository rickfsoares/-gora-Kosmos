import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../models/investment';
import { Sell } from '../models/sell';
import { Buy } from '../models/buy';


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

  getInvestimentos(): Observable<Investment[]> {
    const url = `${this.baseUrl}/investments`
    return this.http.get<Investment[]>(url);
  }


  comprarInvestimento(buy: Buy): Observable<Investment[]> {
    const url = `${this.baseUrl}/investments`
    return this.http.post<Investment[]>(url, buy);
  }

  venderInvestimento(sell: Sell): Observable<Investment[]> {
    const url: string = `${this.baseUrl}/investments`
    return this.http.put<Investment[]>(url, sell);
  }
}
