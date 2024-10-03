import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string = '';

  constructor() { }

    // Armazena o token na memória ou em localStorage
    setToken(token: string): void {
      console.log('set token');
      this.authToken = token;
      localStorage.setItem('authToken', token);
    }

    // Retorna o token armazenado
    getToken(): string {
      return this.authToken;
    }

    // Limpa o token
    clearToken(): void {
      this.authToken = '';
      localStorage.removeItem('authToken');
    }
}
