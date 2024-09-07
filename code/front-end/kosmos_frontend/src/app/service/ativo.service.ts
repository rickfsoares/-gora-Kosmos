import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../models/currency';

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

  private baseUrl = "http://localhost:3000/api"
  constructor(private http: HttpClient) {
   }

  getTotalPages(): Observable<Page> {
    const url = `${this.baseUrl}/stocks/pages`;

    return this.http.get<Page>(url);
  }

  getAtivoByNome(nome: string): Observable<Stock[]> {
    const url = `${this.baseUrl}/stocks/search?nome=${nome}`

    return this.http.get<Stock[]>(url);
  }

  getAtivos(numberOfPage: number): Observable<Stock[]> {
    const url = `${this.baseUrl}/stocks?page=${numberOfPage}`;

    return this.http.get<Stock[]>(url);

  }

  getTimeSeries(stockId: number): Observable<{ stock: Stock, currency: Currency[] }> {
    const url = `${this.baseUrl}/stocks/${stockId}`;
    return this.http.get<{ stock: Stock, currency: Currency[] }>(url);
  }

}
