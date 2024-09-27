import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-side-mission-bar',
  standalone: true,
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-mission-bar.component.html',
  styleUrl: './side-mission-bar.component.scss'
})
export class SideMissionBarComponent {
  readonly panelOpenState = signal(false);
}
