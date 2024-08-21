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


@Component({
  selector: 'app-ativo-tabela',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule, MatPaginatorModule, MatInputModule, FormsModule, AtivoTabelaComponent],
  templateUrl: './ativo-tabela.component.html',
  styleUrls: ['./ativo-tabela.component.scss']
})
export class AtivoTabelaComponent implements OnInit {

  stocks: Stock[] = [];
  currentPage: number = 1;
  pageSize = 10;
  nomeAtivoSearch = '';


  constructor(
    private ativoService: AtivoService,
    private router: Router, InvestService: InvestService) { }



  ngOnInit(): void {
   // this.ativoService.getAtivos(this.currentPage).then(ativos => {
   //   this.ativos = ativos;
   // });
    this.getStocks()
  }

  getStocks(): void {
    this.ativoService.getAtivos(this.currentPage).subscribe(stocks => {
      this.stocks = stocks
    })
  }

  Descricaoativo(ativo: Stock) {
    this.router.navigate(['/descricao',]);
  }

  onPageChange(event: PageEvent){
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize

  }

  onSearchChange() {
    this.ativoService.getAtivoByNome(this.nomeAtivoSearch)
  }

 // procuraAtivos(){
 //   this.ativoService.getAtivos(this.currentPage).then(response => this.ativos = response)
 //   // this.ativoService.getTotalPages().then(response => this.)
 // }

 // onSearchChange() {
 //   this.ativoService.getAtivoByNome(this.nomeAtivoSearch).then(response => this.ativos = response)
 // }

}
