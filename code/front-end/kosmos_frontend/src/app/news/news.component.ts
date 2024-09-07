import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { MessageService } from '../service/message.service';
import { News } from '../models/news';
import { Topic } from '../models/topic';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SideMissionBarComponent } from '../side-mission-bar/side-mission-bar.component';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  imports: [MatPaginatorModule, CommonModule, MainHeaderComponent, SideMissionBarComponent]
})
export class NewsComponent implements OnInit {

  news: News[] = []
  topics: Topic[] = []


  totalPages: number = 1;
  totalItems = 1;
  pageSize = 5;
  currentPage: number = 0;
  isFiltered: boolean = false;
  topic: string = ''

  constructor(private newsService: NewsService, private messageService: MessageService) { }

  pageChanged(event: PageEvent) {

    if (this.isFiltered) {
      this.currentPage = event.pageIndex;
      this.getNewsByTopic(this.topic, this.currentPage + 1); // soma feita para que coincida com o número da página que vem do back-end
    } else {
        this.currentPage = event.pageIndex + 1;
        this.getNews()
      }
  }

  onChange(event: any) {
    this.topic = event.target.value;
    this.isFiltered = true;
    this.getNewsByTopic(event.target.value, this.currentPage = 0); // necessário colocar deixar o currentPage como 0, para que carregue os dados da página inicial das notícias
  }

  ngOnInit(): void {
    this.getNews();
    this.getTopics();
    this.getTotalPages();
  }

  getNews(): void {
    this.newsService.getNews(this.currentPage).subscribe(news => {
      console.log(news);
      this.news = news
    })
  }

  getTotalPages(): void {
    this.newsService.getNumberOfPages().subscribe(pages => {
      this.totalPages = pages.total_page
      this.calcTotalItem(this.totalPages)
    });
  }

  calcTotalItem(totalPages: number): void {
    this.totalItems = totalPages * 5; // O 5 representa a quantidade de items em cada página
  }

  getTopics(): void {
    this.newsService.getTopics().subscribe(topicItems => {
      this.topics = topicItems;
    });
  }

  getNewsByTopic(topicName: string, currentPage: number): void {
    this.newsService.getNewsByTopic(topicName, currentPage).subscribe(filter => {
      this.news = filter.news;
      this.totalPages = filter.total_pages;
    });

    this.calcTotalItem(this.totalPages);
  }

}
