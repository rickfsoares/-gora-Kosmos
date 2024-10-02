import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Mission } from '../models/mission';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-side-mission-bar',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './side-mission-bar.component.html',
  styleUrl: './side-mission-bar.component.scss'
})
export class SideMissionBarComponent implements OnInit {
  missions: Array<Mission> = [];

  constructor(private userService: UsuarioService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): void {
    this.userService.getMissions().subscribe((res) => {
      //console.log("res: " + JSON.stringify(res, null, 2));
      this.missions = [...res];
      console.log("missions: ", this.missions);
      });

  }

  trackById(index: number, mission: Mission): number {
  return mission.id;
  }

}
