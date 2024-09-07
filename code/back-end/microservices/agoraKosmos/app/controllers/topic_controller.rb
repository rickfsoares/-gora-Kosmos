require 'net/http'
class TopicController < ApplicationController
  before_action :authenticate_user!
  def index
    url = URI('http://agora_kosmos_noticias:3000/topics')
    response = Net::HTTP.get(url)
    json_data = JSON.parse(response)

    render json: json_data
  end
end
