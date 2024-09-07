import { News } from "./news";

export class Filter {
  public news: News[];
  public total_pages: number;

  constructor(news: News[], total_pages: number) {
    this.news = news;
    this.total_pages = total_pages;
  }

}
