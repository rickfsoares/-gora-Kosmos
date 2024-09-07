class InvestmentController < ApplicationController
    before_action :authenticate_user!

    def create
        stock = Stock.find(params[:stock_id])
        user  = User.find(current_user.id)
        valor_compra = stock.cotacao * params[:quantity]
        if user.saldo < valor_compra
            render json: {message: "Saldo insuficiente"}, status: :bad_request
        
        else
            user.saldo -= valor_compra
            user.save
            investment = user.investments.create(
                stock: stock, 
                quantidade: params[:quantity])

            render json: {message: "Compra bem-sucessida"}, status: :ok
            return
        end

    end 

    def index
        user = User.find(current_user.id)
        investments = user.investments.includes(:stock)
        render json: investments.to_json(include: :stock)
    end

    def vender
        user = User.find(current_user.id)
        investimet = user.investments.find(params[:investment_id])
        stock = investimet.stock
        value_add = investimet.quantidade * stock.cotacao
        user.saldo += value_add
        user.save
        stock.volume += investimet.quantidade
        stock.save
        investimet.destroy
        render json: {message: "venda bem-sucessida"}

    end

    private
    def investment_params
        params.require(:investment).permit(:stock_id, :quantity, :investment_id)
    end
end
