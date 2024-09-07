import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { InvestService } from '../service/invest.service';
import { Investimento } from '../service/invest.service';  // Supondo que exista um tipo Investimento
import { catchError, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'app-investimentos-component',
  standalone: true,
  imports: [
    CommonModule, RouterLink, MatGridListModule
  ],
  templateUrl: './investimentos-component.component.html',
  styleUrls: ['./investimentos-component.component.scss']
})

export class InvestimentosComponent {
  investimentos: Investimento[] = [];  // Deve ser um array de Investimento

  constructor(private investService: InvestService) {
    this.investService.getInvestimentos().subscribe({
      next: (investimentos) => {
        this.investimentos = [investimentos];  // Atualize a lista com o array recebido
      },
      error: (err) => {
        console.error('Erro ao carregar investimentos:', err);
      }
    });
  }

  venderAtivo(ativo: Investimento) {
    const quantidadeParaVender = prompt(`Quantos ${ativo.nome} deseja vender?`);

    if (quantidadeParaVender) {
      const quantidade = parseInt(quantidadeParaVender, 10);

      if (!isNaN(quantidade) && quantidade > 0 && quantidade <= ativo.quantidade) {
        this.investService.venderInvestimento(ativo.nome, quantidade).pipe(
          tap(() => {
            alert('Venda realizada com sucesso!');
            this.investimentos = this.investimentos.map(i =>
              i.nome === ativo.nome ? { ...i, quantidade: i.quantidade - quantidade } : i
            );
          }),
          catchError((err: any) => {
            console.error('Erro ao vender ativo:', err);
            alert('Falha ao realizar a venda.');
            return EMPTY;
          })
        ).subscribe();  // Não é necessário ter um bloco next ou error aqui, já estão tratados no pipe
      } else {
        alert('Quantidade inválida.');
      }
    }
  }
}

