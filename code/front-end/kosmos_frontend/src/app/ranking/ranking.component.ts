import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


const ELEMENT_DATA: any[] = [
  {pos: 1, nome: 'bilbo', xp: 100000},
  {pos: 2, nome: 'frodo', xp: 10000},
  {pos: 3, nome: 'sam', xp: 1000}
];

const WEEK_DATA: any[] = [
  {pos: 1, nome: 'Gandalf', xp: 100},
  {pos: 2, nome: 'Thorin', xp: 10},
  {pos: 3, nome: 'Legolas', xp: 5},
]

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
  displayedColumns: string[] = ['Colocação', 'Investidor', 'XP'];
  dataSource = ELEMENT_DATA;

  rankList: string = 'global'

  changeRankList(listName: string) {

    if(listName === 'global') {
      this.dataSource = ELEMENT_DATA;
      this.rankList = 'global';
    } else if(listName === 'semanal') {
      this.dataSource = WEEK_DATA;
      this.rankList = 'semanal';
    }
  }
}
