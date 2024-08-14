class NewsController < ApplicationController

  # GET /news
  def index
    @news = News.page(params[:page])

    render json: @news
  end

  def filter_news_by_topic
    topic_choosed = Topic.where(nome: params[:topic]).first

    render json: topic_choosed.news.page(params[:page_filter])
  end

  def collect_news
    news_service = NewsService.new
    news_service.get_news()
    return "Notícias Salvas"
  end

  private
    # Only allow a list of trusted parameters through.
    def news_params
      params.require(:news).permit(:page, :topic, :page_filter)
    end
end
