import { Injectable } from '@angular/core';
import axios from 'axios';

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

  constructor() {
   }

  
  getAtivos(page: number): Promise<Ativo[]> {

    return axios.get<AtivoAplhaVantage[]>(`http://localhost:3000/stocks?page=${page}`).then(response => {
      console.log(response.data)
      return response.data.map(ativo => {
        const _ativo: Ativo = {
          nome: ativo.nome,
          precoAtual: ativo.cotacao,
          valorAbertura: 0,
          valorFechamento: 0,
          descricao: ativo.descricao
        }
        return _ativo
      })
    })

  }


  getTotalPages(): Promise<TotalPages>{
    return axios.get<TotalPages>(`http://localhost:3000/stocks/pages`).then(res => res.data)
  }

  getAtivoByNome(nome: string): Promise<Ativo[]>{
    return axios.get<AtivoAplhaVantage[]>(`http://localhost:3000/stocks/search?nome=${nome}`).then(res => {
      console.log(res.data)
      return res.data.map(ativo => {
        const _ativo: Ativo = {
          nome: ativo.nome,
          precoAtual: ativo.cotacao,
          valorAbertura: 0,
          valorFechamento: 0,
          descricao: ativo.descricao
        }
        return _ativo
      })})
  }

}
