import { ChangeDetectionStrategy, Component, Inject, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Stock } from '../models/stock';
import { InvestService } from '../service/invest.service';
import { Sell } from '../models/sell';
import { Investment } from '../models/investment';
import { Buy } from '../models/buy';

export interface ModalActionData {
  ativoNome: string;
  idAtivo: number;
  acao: 'comprar' | 'vender';
  preco: number;
  investiment: Investment[] | null
}

@Component({
  selector: 'app-modal-action',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './modal-action.component.html',
  styleUrl: './modal-action.component.scss'
})
export class ModalActionComponent {
  quantidade: number = 1; // Quantidade inicial
  valorTotal: number = 0;
  sell: Sell = new Sell(0, 0);
  buy: Buy = new Buy(0,0);

  constructor(
    public dialogRef: MatDialogRef<ModalActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalActionData, private investService: InvestService
  ) {
    this.calcularValorTotal();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  realizarAcao(): void {
    console.log(`${this.data.acao} ${this.quantidade} do ativo ${this.data.ativoNome}`);
    if (this.data.acao === "vender") {
      this.vender();
    }

    if (this.data.acao === "comprar") {
      this.comprar();
    }
    // Fechar o diálogo e passar algum resultado, se necessário
    this.dialogRef.close({ investiment: this.data.investiment });
  }

  vender(): void {
    if (this.data.investiment) {
      this.sell.investment_id = this.data.investiment[0].id;
      this.sell.quantity = this.quantidade;
      this.investService.venderInvestimento(this.sell).subscribe( inv => {
        console.log('tipode de inv subs: ', typeof inv);
        console.log('o que é: ', inv);
        this.data.investiment = inv;
      });
    }
  }

  comprar(): void {

    this.buy.quantity = this.quantidade;
    this.buy.stock_id = this.data.idAtivo;
    this.investService.comprarInvestimento(this.buy).subscribe();
  }

  calcularValorTotal(): void {
    this.valorTotal = this.quantidade * this.data.preco;
  }
}
