import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { InvestimentosComponent } from '../investimentos-component/investimentos-component.component';
import { RankingComponent } from '../ranking/ranking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvestimentosComponent, RankingComponent, CommonModule, NavbarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedSection: string = 'investimentos'; // Seção padrão

  onSectionChange(section: string) {
    this.selectedSection = section;
  }

}
