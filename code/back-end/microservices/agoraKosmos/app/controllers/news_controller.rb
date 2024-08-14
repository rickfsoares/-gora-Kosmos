require 'net/http'

class NewsController < ApplicationController
  def get_news
    url = URI("http://agora_kosmos_noticias:3000/news?page=#{params[:page]}")    
    response = Net::HTTP.get(url)
    json_data = JSON.parse(response)

    return json_data
  end

  def filter_news
    url = URI("http://agora_kosmos_noticias:3000/news/filter?topic=#{params[:topic]}&page=#{params[:page]}")
    response = Net::HTTP.get(url)
    json_data = JSON.parse(response)

    return json_data
  end

  def get_all_pages_of_news
    url = URI("http://agora_kosmos_noticias:3000/news/pages")
    response = Net::HTTP.get(url)
    json_data = JSON.parse(response)

    return json_data
  end


  private
    # Only allow a list of trusted parameters through.
    def news_params
      params.permit(:page, :topic)
    end
end
