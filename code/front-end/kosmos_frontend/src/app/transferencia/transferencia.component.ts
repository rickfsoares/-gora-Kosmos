import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Usuario, UsuarioService } from '../service/usuario.service';
import { TransferenciaService } from '../service/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule,
    MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss'
})
export class TransferenciaComponent {
  quantia: number = 0;
  @Input() idUsuario!: number;
  usuario!: Usuario;
  
  constructor(private transferenciaService: TransferenciaService, private usuarioService: UsuarioService, private router: Router){}
  
  ngOnInit(){
    console.log(this.idUsuario)
    this.usuarioService.getUsuarioById(this.idUsuario)
      .then(usuario => this.usuario = usuario)
      .catch(error => console.error(error))
  }

  transfereQuantia() {
      this.transferenciaService.transferirParaContaAgoraKosmos(this.usuario, this.quantia)
        .then(()=> {
          this.router.navigate(['/lista-pendentes'])
        })
        .catch(error => {
          console.error(error)
          alert("Houve um erro ao realizar a transferência")
        })
  }


}
