import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AtivoService, Ativo } from '../service/ativo.service';
import { InvestService } from '../service/invest.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-pendentes',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule],
  templateUrl: './lista-pendentes.component.html',
  styleUrl: './lista-pendentes.component.scss'
})


export class ListaPendentesComponent {

}
