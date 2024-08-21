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


//  getAtivos(page: number): Promise<Ativo[]> {
//
//    return axios.get<AtivoAplhaVantage[]>(`http://localhost:3000/stocks?page=${page}`).then(response => {
//      console.log(response.data)
//      return response.data.map(ativo => {
//        const _ativo: Ativo = {
//          nome: ativo.nome,
//          precoAtual: ativo.cotacao,
//          valorAbertura: 0,
//          valorFechamento: 0,
//          descricao: ativo.descricao
//        }
//        return _ativo
//      })
//    })
//
//  }
//
//
//  getTotalPages(): Promise<TotalPages>{
//    return axios.get<TotalPages>(`http://localhost:3000/stocks/pages`).then(res => res.data)
//  }
//
//  getAtivoByNome(nome: string): Promise<Ativo[]>{
//    return axios.get<AtivoAplhaVantage[]>(`http://localhost:3000/stocks/search?nome=${nome}`).then(res => {
//      console.log(res.data)
//      return res.data.map(ativo => {
//        const _ativo: Ativo = {
//          nome: ativo.nome,
//          precoAtual: ativo.cotacao,
//          valorAbertura: 0,
//          valorFechamento: 0,
//          descricao: ativo.descricao
//        }
//        return _ativo
//      })})
//  }

  getTotalPages(): Observable<Page> {
    const url = `${this.baseUrl}/stocks/pages`;

    return this.http.get<Page>(url);
  }

  getAtivoByNome(nome: string): Observable<Stock> {
    const url = `${this.baseUrl}/stocks/search?nome=${nome}`

    return this.http.get<Stock>(url);
  }

  getAtivos(numberOfPage: number): Observable<Stock[]> {

    const url = `${this.baseUrl}/stocks?page=${numberOfPage}`;

    return this.http.get<Stock[]>(url);

  }
}
