import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private authToken = localStorage.getItem('authToken') || '';
  private header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});


  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken') || '';
    this.header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});
  }

  getInvestimentos(): Observable<Investment[]> {
    const url = `${this.baseUrl}/investments`

    const authToken = localStorage.getItem('authToken') || '';
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.get<Investment[]>(url, {headers: header});
  }


  comprarInvestimento(buy: Buy): Observable<any> {
    const url = `${this.baseUrl}/investments`

    const authToken = localStorage.getItem('authToken') || '';
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.post<any>(url, buy, {headers: header});
  }

  venderInvestimento(sell: Sell): Observable<Investment[]> {
    const url: string = `${this.baseUrl}/investments`

    const authToken = localStorage.getItem('authToken') || '';
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.put<Investment[]>(url, sell, {headers: header});
  }
}
