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

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken') || '';
    this.header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});
  }

  getRankingSemanal(): Observable<Ranking[]> {
    const url = `${this.baseUrl}/ranking/week`;
    const authToken = localStorage.getItem('authToken') || ''
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.get<Ranking[]>(url, {headers: header});
  }

  getRankingGlobal(): Observable<Ranking[]> {
    const url = `${this.baseUrl}/ranking/global`;
    const authToken = localStorage.getItem('authToken') || ''
    const header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${authToken}`});

    return this.http.get<Ranking[]>(url, {headers: header});
  }
}
