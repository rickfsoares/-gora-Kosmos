require 'net/http'

class TransactionController < ApplicationController
    #before_action :authenticate_user!
    def criar_transacao
        url = URI("http://agora-kosmos-transacoes:3000/transactions/criar")
        request_body = {
            valor: params[:valor],
            id_usuario: 1
        }.to_json
        response = Net::HTTP.post(url, request_body, 'Content-Type' => 'application/json')
        json_data = JSON.parse(response.body)

        RabbitMqService.subscribe
    
        render json: json_data
    end

    def index
        url = URI("http://agora-kosmos-transacoes:3000/transactions?id_usuario=#{1}")
        response = Net::HTTP.get(url)
        json_data = JSON.parse(response)
        render json: json_data
    end


    private
    # Only allow a list of trusted parameters through.
    def news_params
      params.permit(:valor, :id_usuario)
    end
end
