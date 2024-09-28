import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-side-mission-bar',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-mission-bar.component.html',
  styleUrl: './side-mission-bar.component.scss'
})
export class SideMissionBarComponent {
  missions: Array<Mission> = [
    new Mission("missão 1", "compre 2 ativos", 2),
    new Mission("missão 2", "compre 4 ativos", 2)
  ];

  readonly panelOpenState = signal(false);
}
