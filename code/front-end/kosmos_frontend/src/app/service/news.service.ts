import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { News } from '../models/news';
import { Topic } from '../models/topic';
import { catchError, map, tap } from 'rxjs/operators';
import { Page } from '../models/page';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = "http://localhost:3000/api"

  private authToken = localStorage.getItem('authToken') || '';
  private header = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `Bearer ${this.authToken}`});

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getNews(numberOfPage:number): Observable<News[]> {
    const url = `${this.baseUrl}/news?page=${numberOfPage}`

    return this.http.get<News[]>(url, {headers: this.header})
    .pipe(
      catchError(this.handleError<News[]>('getNews', []))
    );
  }

  getNewsByTopic(topic:string, numberOfPage:number): Observable<Filter> {
    const url = `${this.baseUrl}/news/filter?topic=${topic}&page=${numberOfPage}`;

    return this.http.get<Filter>(url, {headers: this.header});

  }

  getNumberOfPages(): Observable<Page> {
    const url = `${this.baseUrl}/news/pages`;
    return this.http.get<Page>(url, {headers: this.header});
  }

  getTopics(): Observable<Topic[]> {
    const url = `${this.baseUrl}/topics`;
    return this.http.get<Topic[]>(url, {headers:this.header}).pipe(
      catchError(this.handleError<Topic[]>('getTopics', []))
    );
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
