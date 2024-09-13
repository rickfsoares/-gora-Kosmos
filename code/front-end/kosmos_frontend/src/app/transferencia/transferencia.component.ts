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
import { TransactionService } from '../service/transaction.service';
import { ValorPagamento } from '../models/valor-pagamento';

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

  constructor(private transferenciaService: TransferenciaService, private usuarioService: UsuarioService, private router: Router, private transaction: TransactionService ){}

  ngOnInit(){
    console.log(this.idUsuario)
    this.usuarioService.getUsuarioById(this.idUsuario)
      .then(usuario => this.usuario = usuario)
      .catch(error => console.error(error))
  }

  transfereQuantia() {
      this.transaction.payTransaction(new ValorPagamento(this.quantia)).subscribe(res => this.router.navigate(['/lista-pendentes']));

  }


}
