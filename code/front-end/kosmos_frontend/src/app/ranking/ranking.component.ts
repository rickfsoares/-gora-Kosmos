import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RankingService } from '../service/ranking.service';
import { Ranking } from '../models/ranking';


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
export class RankingComponent implements OnInit {
  displayedColumns: string[] = ['Investidor', 'XP'];
  dataSource: Ranking[] = [];

  rankList: string = 'global'

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
      this.changeRankList(this.rankList);
  }

  changeRankList(listName: string) {

    if(listName === 'global') {
      this.rankingService.getRankingGlobal().subscribe({next: (res) => {
        this.dataSource = res;
      }});
      this.rankList = 'global';
    } else if(listName === 'semanal') {
      this.rankingService.getRankingSemanal().subscribe({next: (res) => {
        this.dataSource = res;
      }});
      this.rankList = 'semanal';
    }
  }
}
