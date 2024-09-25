import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string | null = null;

  constructor() { }

    // Armazena o token na memória ou em localStorage
    setToken(token: string): void {
      console.log('set token');
      this.authToken = token;
      localStorage.setItem('authToken', token);
    }

    // Retorna o token armazenado
    getToken(): string | null {
      return this.authToken || localStorage.getItem('authToken');
    }

    // Limpa o token
    clearToken(): void {
      this.authToken = null;
      localStorage.removeItem('authToken');
    }
}
