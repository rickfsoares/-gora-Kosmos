import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Usuario, UsuarioService } from '../service/usuario.service';
import { CpfPipe } from '../shared/cpf.pipe';
import { CepPipe } from '../shared/cep.pipe';
import { CepDirective } from '../shared/cep.directive';

@Component({
  selector: 'app-perfil-crud',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, CpfPipe,
    MatButtonModule, CepPipe, MatIconModule, FormsModule, CepDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './perfil-crud.component.html',
  styleUrl: './perfil-crud.component.scss'
})
export class PerfilCrudComponent {
  @Input() idUsuario!: number;
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuarioService.getUsuarioById(this.idUsuario)
      .then(usuario => this.usuario = usuario)
      .catch(error => console.error(error))
  }
  atualizaCadastro() {
    this.usuarioService.atualiza(this.usuario)
    .then(() => {
        alert("Usuário atualizado")
      })
      .catch(error => {
        alert("Não foi possível atualizar os dados do usuário");
        console.log(error)
      })
  }

}
