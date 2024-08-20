export class News {

  public id:number;
  public title:string;
  public summary:string;
  public url:string;
  public bannerImage:string;
  public created_at:string;
  public updated_at:string;
  public topic_id:number;

  constructor(id:number,
              title:string='',
              summary:string='',
              url:string='',
              bannerImage:string='',
              created_at:string='',
              updated_at:string='',
              topic_id:number) {

                this.id = id;
                this.title = title;
                this.summary = summary;
                this.url = url;
                this.bannerImage = bannerImage;
                this.created_at = created_at;
                this.updated_at = updated_at;
                this.topic_id = topic_id;
  }

//  public getTitle(): string {
//    return this._title;
//  }
//
//  public getSummary():string {
//    return this._summary;
//  }
//
//  public getUrl():string {
//    return this._url;
//  }
//
//  public getBannerImage():string {
//    return this._bannerImage;
//  }
//
//  public getCreatedAt():string {
//    return this._created_at;
//  }
//
//  public getUpdatedAt():string {
//    return this._updated_at;
//  }
//
//  public getTopicId() {
//    return this._topic_id;
//  }

}
