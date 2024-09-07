import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() sectionChange = new EventEmitter<string>();
  selectedSection: string = 'investimentos'; 

  changeSection(section: string) {
    this.selectedSection = section;
    this.sectionChange.emit(section);
  }

}
