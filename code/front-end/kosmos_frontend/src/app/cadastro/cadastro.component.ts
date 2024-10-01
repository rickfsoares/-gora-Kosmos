import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../service/cadastro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent {
  nome: string = '';
  cpf: string = '';
  nickname: string = '';
  email: string = '';
  celular: string = '';
  senha: string = '';

  constructor(private router: Router, private cadastroService: CadastroService) {}

  onSubmit() {
    this.cadastroService.setDados({
      nome: this.nome,
      cpf: this.cpf,
      nickname: this.nickname,
      email: this.email,
      celular: this.celular,
      senha: this.senha
    });
    this.router.navigate(['/cadastro2']);
  }

}
