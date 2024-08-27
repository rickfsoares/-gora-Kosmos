import { Injectable } from '@angular/core';
//import axios from 'axios';
import { Stock } from '../models/stock';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Ativo {
  nome: string;
  precoAtual: number;
  valorAbertura: number;
  valorFechamento: number;
  descricao: string;
}

interface AtivoAplhaVantage {
  cotacao: number,
  created_at: Date,
  descricao: string,
  id: number,
  nome: string,
  updated_at: Date,
  volume: number
}

interface TotalPages {
  total_pages: number
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
}
