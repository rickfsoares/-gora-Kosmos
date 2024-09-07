// Remove the duplicate import statement
import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AtivoService, Ativo } from '../service/ativo.service';
import { InvestService } from '../service/invest.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Stock } from '../models/stock';
import { MatDialog } from '@angular/material/dialog';
import { ModalActionComponent, ModalActionData } from '../modal-action/modal-action.component';


@Component({
  selector: 'app-ativo-tabela',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule, MatPaginatorModule, MatInputModule, FormsModule, AtivoTabelaComponent],
  templateUrl: './ativo-tabela.component.html',
  styleUrls: ['./ativo-tabela.component.scss']
})
export class AtivoTabelaComponent implements OnInit {
  stocks: Stock[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  nomeAtivoSearch: string = '';
  totalItems: number = 1;
  totalPages: number = 1;


  constructor(
    private ativoService: AtivoService,
    private router: Router,
    InvestService: InvestService,
    private dialog: MatDialog) { }



  ngOnInit(): void {
    this.getStocks();
    this.getTotalPages()
  }

  getStocks(): void {
    this.ativoService.getAtivos(this.currentPage + 1).subscribe(stocks => {
      this.stocks = stocks

      //console.log('current page - getStocks: ' + this.currentPage + 1);
    })
  }

  Descricaoativo(ativo: Stock): void {
    this.router.navigate(['/descricao', ativo.nome]);
  }

  onPageChange(event: PageEvent): void{
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize
    //console.log('event.pageIndex - onPageChange: ' + event.pageIndex)
    this.getStocks();

  }

  onSearchChange(): void {
    if (this.nomeAtivoSearch.trim()) {
      this.ativoService.getAtivoByNome(this.nomeAtivoSearch.toUpperCase().trim()).subscribe(stock => {
        this.stocks = stock;
        this.totalPages = 1;
        this.totalItems = 1;
      })
    } else {
      this.currentPage = 0;
      this.getTotalPages();
      this.getStocks();
    }

  }

  getTotalPages(): void {
    this.ativoService.getTotalPages().subscribe(pages => {
      this.totalPages = pages.total_page
      this.calcTotalItem(this.totalPages)
    })
  }

  calcTotalItem(totalPages: number): void {
    this.totalItems = totalPages * 5;
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
