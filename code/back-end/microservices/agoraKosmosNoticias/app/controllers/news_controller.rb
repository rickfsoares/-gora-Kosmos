class NewsController < ApplicationController

  # GET /news
  def index
    @news = News.page(params[:page])

    render json: @news
  end

  def filter_news_by_topic
    topic_choosed = Topic.where(nome: params[:topic]).first
    pages = topic_choosed.news.page(1).total_pages
    render json: { news: topic_choosed.news.page(params[:page]), total_pages: pages }

  end

  # GET /news/collect
  def collect_news
    news_service = NewsService.new
    news_service.get_news()
    return "Notícias Salvas"
  end

  def all_pages_of_news
    pages = News.page(1).total_pages
    render json: {total_page:pages}
  end


  private
    # Only allow a list of trusted parameters through.
    def news_params
      params.require(:news).permit(:page, :topic)
    end
end
