import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestService, Investimento } from '../service/invest.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-descricao.ativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descricao.ativo.component.html',
  styleUrl: './descricao.ativo.component.scss'
})
export class DescricaoAtivoComponent {

  investimento$: Observable<Investimento>;

  quantidade = 1;

  constructor(private investService: InvestService) {
    this.investimento$ = this.investService.investimento$;
  }

  comprar() {
    this.investService.comprarInvestimento(this.quantidade);
  }
}
