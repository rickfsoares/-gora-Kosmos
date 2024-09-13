import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SideMissionBarComponent } from '../side-mission-bar/side-mission-bar.component';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../service/transaction.service';
import { ModalTransactionComponent, ModalTransactionData } from '../modal-transaction/modal-transaction.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-pendentes',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule, MainHeaderComponent, SideMissionBarComponent],
  templateUrl: './lista-pendentes.component.html',
  styleUrl: './lista-pendentes.component.scss'
})


export class ListaPendentesComponent implements OnInit{

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(t => {
      this.transactions = t;
    });
  }

  openModalPayment(transaction: Transaction): void {
    const dialogRef = this.dialog.open<ModalTransactionComponent, ModalTransactionData>(ModalTransactionComponent, {
      data: {
        qrCode: transaction.qrCode,
        qrCodeBase64: transaction.qrCodeBase64
      }
    });

    dialogRef.afterClosed().subscribe(res => this.getTransactions());
  }
}
