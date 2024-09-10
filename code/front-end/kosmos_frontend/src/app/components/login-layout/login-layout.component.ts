import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.http.post('localhost://3000/api/login', credentials, { observe: 'response' })
      .subscribe(response => {
        const authToken = response.headers.get('authorization')?.split(' ')[1];
        if (authToken) {
          this.authService.setToken(authToken); // Armazena o token usando o AuthService
          // Redirecione ou mostre uma mensagem de sucesso, conforme necessário
        }
      }, error => {
        // Trate erros de login, como email ou senha inválidos
        console.error('Erro ao fazer login', error);
      });
  }
}
