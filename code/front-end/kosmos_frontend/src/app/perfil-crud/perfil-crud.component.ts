import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../service/usuario.service';
import { CpfPipe } from '../shared/cpf.pipe';
import { CepPipe } from '../shared/cep.pipe';
import { CepDirective } from '../shared/cep.directive';
import { CommonModule } from '@angular/common';
import { UserAtualizado } from '../models/user-atualizado';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil-crud',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, CpfPipe,
    MatButtonModule, CepPipe, MatIconModule, FormsModule, CepDirective, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './perfil-crud.component.html',
  styleUrl: './perfil-crud.component.scss'
})
export class PerfilCrudComponent {

  ufs = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ];

  userInfo: any = '';

  constructor(private usuarioService: UsuarioService, @Inject(MatSnackBar) private matSnackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this.matSnackBar.open(message, action, {
      duration: 2800
    });
  }

  ngOnInit(){
    this.getUserInfo();
  }

  atualizaCadastro() {
    this.usuarioService.atualiza(new UserAtualizado(this.userInfo.nome, this.userInfo.email, this.userInfo.endereco, this.userInfo.uf, this.userInfo.cidade, this.userInfo.profissao, this.userInfo.renda, this.userInfo.estadoCivil, this.userInfo.telefone, this.userInfo.cep)).subscribe({next: res => {
      //console.log('atualização: ', res);
      this.openSnackBar("Cadastro Atualizado", "Fechar");
    }, error: (err) => {
      this.openSnackBar(`Erro ao atualizar cadastro: dados inválidos`, "Fechar");
    }
    });
  }

  getUserInfo() {
    this.usuarioService.getAllUserInfo().subscribe((data) => {
      this.userInfo = data;
    });
  }

}
