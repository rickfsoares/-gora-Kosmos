import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Usuario, UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil-crud',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatIconModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './perfil-crud.component.html',
  styleUrl: './perfil-crud.component.scss'
})
export class PerfilCrudComponent {
  @Input() id!: number;
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuarioService.getUsuarioById(this.id)
      .then(usuario => this.usuario = usuario)
      .catch(error => console.error(error))
  }
  atualizaCadastro() {
    const usuario: Usuario = {
      nome: this.usuario.nome,
      cpf: this.usuario.cpf,
      email: this.usuario.email,
      telefone: this.usuario.telefone,
      profissao: this.usuario.profissao,
      estadoCivil: this.usuario.estadoCivil,
      endereco: this.usuario.endereco,
      id: 0
    }
    this.usuarioService.atualiza(usuario)
      .then(() => {
        alert("Usuário atualizado")
      })
      .catch(error => {
        alert("Não foi possível atualizar os dados do usuário");
        console.log(error)
      })
  }

}
