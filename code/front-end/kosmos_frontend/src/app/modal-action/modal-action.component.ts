import {ChangeDetectionStrategy, Component, Inject, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { Stock } from '../models/stock';

export interface ModalActionData {
  ativoNome: string;
  acao: 'comprar' | 'vender';
  preco: number;
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

  constructor(
    public dialogRef: MatDialogRef<ModalActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalActionData
  ) {
    this.calcularValorTotal();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  realizarAcao(): void {
    // Aqui você implementa a lógica para comprar ou vender
    console.log(`${this.data.acao} ${this.quantidade} do ativo ${this.data.ativoNome}`);
    // Fechar o diálogo e passar algum resultado, se necessário
    this.dialogRef.close({ quantidade: this.quantidade, acao: this.data.acao });
  }

  calcularValorTotal(): void {
    this.valorTotal = this.quantidade * this.data.preco;
  }
}
