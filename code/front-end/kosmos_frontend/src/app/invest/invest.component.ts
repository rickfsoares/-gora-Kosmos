import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AtivoTabelaComponent } from "../ativo-tabela/ativo-tabela.component";
import { Ativo, AtivoService } from '../service/ativo.service';



@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, AtivoTabelaComponent],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.scss'
})
export class InvestComponent{



  


}
