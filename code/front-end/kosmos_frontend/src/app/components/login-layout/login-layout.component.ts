import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseAuth } from '../../models/response-auth';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  onSubmit() {
    const credentials = { user: {email: this.email, password: this.password} };
    this.http.post<ResponseAuth>('http://localhost:3000/api/login', credentials)
      .subscribe(response => {
        if (response.token) {
          this.authService.setToken(response.token); // Armazena o token usando o AuthService
          console.log('token: ', response.token)
          console.log('auth token', this.authService.getToken());
          this.router.navigate(['/home'])
        }
      }, error => {
        // Trate erros de login, como email ou senha inválidos
        console.error('Erro ao fazer login', error);
        alert(`login falhou: ${error}`);
      });
  }
}
