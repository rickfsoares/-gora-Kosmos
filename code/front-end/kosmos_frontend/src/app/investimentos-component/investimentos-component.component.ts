import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { InvestService } from '../service/invest.service';
import { Investimento } from '../service/invest.service';
import { catchError, EMPTY, tap } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Stock } from '../models/stock';
import { ModalActionComponent, ModalActionData } from '../modal-action/modal-action.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-investimentos-component',
  standalone: true,
  imports: [
    CommonModule, RouterLink, MatGridListModule, MatButtonModule, MatCardModule,
  ],
  templateUrl: './investimentos-component.component.html',
  styleUrls: ['./investimentos-component.component.scss']
})

export class InvestimentosComponent {
  stocks: Stock[] = [];

  constructor(private dialog: MatDialog) {
  }

  openModalAction(ativo: Stock, acao: 'comprar' | 'vender'): void {
    const dialogRef = this.dialog.open<ModalActionComponent, ModalActionData>(ModalActionComponent, {
      width: '400px',
      data: {
        ativoNome: ativo.nome,
        acao: acao,
        preco: ativo.cotacao
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Ação realizada: ${result.acao}, Quantidade: ${result.quantidade}`);
        // Aqui você pode adicionar lógica adicional para processar o resultado do modal
      }
    });
  }

}

