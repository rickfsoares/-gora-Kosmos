import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ranking } from '../models/ranking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private baseUrl = "http://localhost:3000/api"
  private authToken = localStorage.getItem('authToken') || '';
  private header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});

  constructor(private http: HttpClient) { }

  getRankingSemanal(): Observable<Ranking[]> {
    const url = `${this.baseUrl}/ranking/week`;

    return this.http.get<Ranking[]>(url, {headers: this.header});
  }

  getRankingGlobal(): Observable<Ranking[]> {
    const url = `${this.baseUrl}/ranking/global`;

    return this.http.get<Ranking[]>(url, {headers: this.header});
  }
}
