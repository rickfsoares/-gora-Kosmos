import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { ValorPagamento } from '../models/valor-pagamento';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    const url = `${this.baseUrl}/transactions`;
    return this.http.get<Transaction[]>(url);
  }

  payTransaction(valor: ValorPagamento): Observable<any> {
    const url = `${this.baseUrl}/transactions`
    return this.http.post<any>(url, valor);
  }
}
