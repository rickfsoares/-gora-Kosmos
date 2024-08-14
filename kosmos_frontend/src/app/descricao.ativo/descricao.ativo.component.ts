import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtivoService, Ativo } from '../service/ativo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-descricao.ativo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descricao.ativo.component.html',
  styleUrls: ['./descricao.ativo.component.scss']
})
export class DescricaoAtivoComponent implements OnInit {
  ativos$: Observable<Ativo[]>;
  ativo: Ativo | null = null;
  quantidade = 1;

  constructor(private ativoService: AtivoService) {
    this.ativos$ = this.ativoService.getAtivos();
  }

  ngOnInit(): void {

    this.ativos$.subscribe(ativos => {
      if (ativos.length > 0) {
        this.ativo = ativos[0];
      }
    });
  }

  comprar(): void {
    if (this.ativo) {
      console.log(`Comprando ${this.quantidade} de ${this.ativo.nome} por ${this.ativo.precoAtual}`);

    }
  }
}
