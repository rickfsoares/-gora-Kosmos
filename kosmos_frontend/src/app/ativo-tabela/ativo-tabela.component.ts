import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AtivoService, Ativo } from '../service/ativo.service';


@Component({
  selector: 'app-ativo-tabela',
  standalone: true,
  imports: [CommonModule, MatIconModule], 
  templateUrl: './ativo-tabela.component.html',
  styleUrl: './ativo-tabela.component.scss'
})
export class AtivoTabelaComponent implements OnInit {
  ativos: Ativo[] = [];

  constructor(@Inject(AtivoService) private ativoService: AtivoService) { }

  ngOnInit(): void {
    this.ativoService.getAtivos().subscribe(ativos => {
      this.ativos = ativos;
    });
  }
}
