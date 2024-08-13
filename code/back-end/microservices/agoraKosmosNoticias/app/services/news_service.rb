# frozen_string_literal: true
require 'news_services_pb'
require 'http'

class NewsService < News::NewsService::Service
  def get_news(request, _call)
    api_key = ENV['ALPHA_VANTAGE_API_KEY']
    url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=#{api_key}&page=#{request.page_number}&per_page=#{request.resuts_per_page}"

    response = HTTP.get(url)

    json_data = JSON.parse(response.body)

    news_items = json_data['articles'].map do |article|
      NewsItem.new(
        title: article['title'],
        summary: article['summary'],
        url: article['url'],
        banner_image: article['banner_image'],
        topics: article['topics']
      )
    end

    NewsResponse.new(news: news_items)
  end

  def get_news_by_topic(request, _call)
    api_key = ENV['ALPHA_VANTAGE_API_KEY']

    if request.topics.empty?
      raise GRPC::InvalidArgument, "O parâmetro 'topics' é obrigatório"
    end

    url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=#{api_key}&topics=#{request.topics}&page=#{request.page_number}&per_page=#{request.resuts_per_page}"

    response = HTTP.get(url)

    json_data = JSON.parse(response.body)

    news_items = json_data['articles'].map do |article|
      NewsItem.new(
        title: article['title'],
        summary: article['summary'],
        url: article['url'],
        banner_image: article['banner_image'],
        topics: article['topics']
      )
    end

    NewsResponse.new(news: news_items)

  end
