# frozen_string_literal: true
require 'net/http'

class NewsService
  def get_news()
    api_key = ENV['ALPHA_VANTAGE_API_KEY']
    url = URI("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=W5B31PQTZIVVZTWF")

    response = Net::HTTP.get(url)

    json_data = JSON.parse(response)

    if json_data && json_data['feed']
      json_data['feed'].each do |article|
        News.new(
          title: article['title'],
          summary: article['summary'],
          url: article['url'],
          bannerImage: article['banner_image'],
          topics: Topic.where(nome: get_first_topic(article['topics'])).first
        ).save
      end
    end
  end

  private
    def get_first_topic(topics)
      topics.each do |article|
        return article["topic"]
      end

    end

end

