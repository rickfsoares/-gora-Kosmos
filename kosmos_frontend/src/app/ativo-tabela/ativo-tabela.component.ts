import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AtivoService, Ativo } from '../service/ativo.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ativo-tabela',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule],
  templateUrl: './ativo-tabela.component.html',
  styleUrls: ['./ativo-tabela.component.scss']
})
export class AtivoTabelaComponent implements OnInit {


  ativos: Ativo[] = [];

  constructor(
    @Inject(AtivoService) private ativoService: AtivoService,
    private router: Router) { }

  ngOnInit(): void {
    this.ativoService.getAtivos().subscribe(ativos => {
      this.ativos = ativos;
    });
  }

  Descricaoativo(ativo: Ativo) {
    this.router.navigate(['/descricao',]);
  }
}
