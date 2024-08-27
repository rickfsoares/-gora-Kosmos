import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtivoService, Ativo } from '../service/ativo.service';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descricao.ativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descricao.ativo.component.html',
  styleUrls: ['./descricao.ativo.component.scss']
})
export class DescricaoAtivoComponent implements OnInit {
  ativo: Stock[] = [];
  quantidade = 1;
  page: number = 1;

  constructor(private ativoService: AtivoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getAtivo();
  }

  getAtivo() {
    let nomeAtivo = this.route.snapshot.paramMap.get('nome') ?? '';

    this.ativoService.getAtivoByNome(nomeAtivo).subscribe(stock => {
      this.ativo = stock;
      console.log(this.ativo);
    })
  }

  comprar(): void {
    //    if (this.ativo) {
    //      console.log(`Comprando ${this.quantidade} de ${this.ativo.nome} por ${this.ativo.precoAtual}`);
    //
    //    }
  }

  returnToInvest(): void {
    this.router.navigate(['invest']);
  }
}
