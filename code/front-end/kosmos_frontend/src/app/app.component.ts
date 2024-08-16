import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { InvestComponent } from './invest/invest.component';
import { AtivoTabelaComponent } from './ativo-tabela/ativo-tabela.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsComponent, InvestComponent, AtivoTabelaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kosmos_frontend';
}
