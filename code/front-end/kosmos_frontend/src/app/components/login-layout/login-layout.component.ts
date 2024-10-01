import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseAuth } from '../../models/response-auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../../service/usuario.service';

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

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, @Inject(MatSnackBar) private matSnackBar: MatSnackBar, private userService: UsuarioService) {}

  openSnackBar(message: string, action: string): void {
    this.matSnackBar.open(message, action, {
      duration: 2800
    });
  }

  onSubmit() {
    const credentials = { user: {email: this.email, password: this.password} };
    this.http.post<ResponseAuth>('http://localhost:3000/api/login', credentials)
      .subscribe({
      next: (response) => {
        if (response.token) {
          this.authService.setToken(response.token);
          this.userService.setUserInfo(response.user);
          this.router.navigate(['/home'])
        }
      }, error: (err) => {
        console.error('Erro ao fazer login', err);
        this.openSnackBar(`Erro ao realizar login: ${err.error}`, "Fechar");
      }});
  }
}
