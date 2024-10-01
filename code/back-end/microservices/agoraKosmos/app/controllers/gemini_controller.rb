require 'net/http'

class GeminiController < ApplicationController
  before_action :authenticate_user!
  def index
    begin
      authorize! :index, :gemini
      url = URI("http://agora-kosmos-gemini:5000/chatboot")
      request_body = {
        prompt: params[:message]
      }.to_json
      response = Net::HTTP.post(url, request_body, 'Content-Type' => 'application/json')
      json_data = JSON.parse(response.body)
      render json: json_data

    rescue CanCan::AccessDenied => e
      render json: { message: "Acesso negado" }, status: :forbidden
    end
  end
  
  private
  # Only allow a list of trusted parameters through.
  def gemini_params
    params.permit(:message)
  end
end
