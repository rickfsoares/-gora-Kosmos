import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { InvestComponent } from './invest/invest.component';
import { AtivoTabelaComponent } from './ativo-tabela/ativo-tabela.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvestimentosComponent } from './investimentos-component/investimentos-component.component';
import { RankingComponent } from './ranking/ranking.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsComponent, InvestComponent, AtivoTabelaComponent, NavbarComponent, InvestimentosComponent, RankingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
onSectionChange($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'kosmos_frontend';
}
