import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AtivoTabelaComponent } from "../ativo-tabela/ativo-tabela.component";

interface Ativo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, AtivoTabelaComponent],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.scss'
})
export class InvestComponent {

  ativos: Ativo[] = [
    {value: 'ativo01', viewValue: 'Ativo 01'},
    {value: 'ativo02', viewValue: 'Ativo 02'},

  ];

  



}
