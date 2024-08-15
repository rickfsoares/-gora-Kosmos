import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './news/news.component';
import { InvestComponent } from './invest/invest.component';
import { AtivoTabelaComponent } from './ativo-tabela/ativo-tabela.component';
import { DescricaoAtivoComponent } from './descricao.ativo/descricao.ativo.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },

  {
    path: 'invest',
    component: InvestComponent
  },

  {
    path: 'ativo',
    component: AtivoTabelaComponent
  },

  {
    path: 'descricao',
    component: DescricaoAtivoComponent
  },



  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },


];

