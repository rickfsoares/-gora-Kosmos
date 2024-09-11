import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { InvestimentosComponent } from '../investimentos-component/investimentos-component.component';
import { RankingComponent } from '../ranking/ranking.component';
import { SideMissionBarComponent } from '../side-mission-bar/side-mission-bar.component';
import { MainHeaderComponent } from '../main-header/main-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvestimentosComponent, RankingComponent, CommonModule, NavbarComponent, RouterOutlet, SideMissionBarComponent, MainHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedSection: string = 'investimentos'; // Seção padrão

  onSectionChange(section: string) {
    this.selectedSection = section;
  }

}
