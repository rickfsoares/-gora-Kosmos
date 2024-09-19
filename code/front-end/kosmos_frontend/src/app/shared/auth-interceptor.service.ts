import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IMensagem} from "../models/imensagem";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private mensagemService: IMensagem) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(_ => console.log("interceptando request")),
      catchError((erro: HttpErrorResponse) => this.processarErroResposta(erro)));
  }

  processarErroResposta(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.mensagemService.erro(erro.message);
    return throwError(() => erro);
  }

}

