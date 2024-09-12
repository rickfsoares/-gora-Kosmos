import { Component, OnInit } from '@angular/core';
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
import { Investment } from '../models/investment';
import { Sell } from '../models/sell';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-investimentos-component',
  standalone: true,
  imports: [
    CommonModule, RouterLink, MatGridListModule, MatButtonModule, MatCardModule,
  ],
  templateUrl: './investimentos-component.component.html',
  styleUrls: ['./investimentos-component.component.scss']
})

export class InvestimentosComponent implements OnInit {
  stocks: Stock[] = [];
  investimentos: Investment[] = [];

  constructor(private dialog: MatDialog, private investService: InvestService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getInvestimentos();
  }

  getInvestimentos() {
    this.investService.getInvestimentos().subscribe(i => {
      this.investimentos = i;
      console.log(this.investimentos);
    });
  }

  openModalAction(ativo: Stock, acao: 'comprar' | 'vender'): void {
    console.log('investimento dentro do modal: ', this.investimentos);
    const investment = this.investimentos.filter(inv => inv.stock_id == ativo.id) || null;

    const dialogRef = this.dialog.open<ModalActionComponent, ModalActionData>(ModalActionComponent, {
      width: '400px',
      data: {
        ativoNome: ativo.nome,
        idAtivo: 0,
        acao: acao,
        preco: ativo.cotacao,
        investiment: investment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const arrayInvestimentos: Investment[] = result.investiment;
        let idx = -1
        this.investimentos = [...arrayInvestimentos];
        console.log(arrayInvestimentos);
        console.log(this.investimentos);
        // for(let investi of arrayInvestimentos) {
        //   idx = this.investimentos.findIndex(investimento => investi.id === investimento.id);
        //   if(idx >= 0) {
        //     console.log(idx);
        //     this.investimentos[idx].quantidade = investi.quantidade;
        //   } 
        //   else {
        //     this.investimentos.splice(idx, 1);
        //   }
        // }
      }
    });
  }
}

