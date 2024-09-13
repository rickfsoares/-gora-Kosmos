class InvestmentController < ApplicationController
    #before_action :authenticate_user!

    def create
        stock = Stock.find(params[:stock_id])
        user  = User.find(1)
        valor_compra = stock.cotacao * params[:quantity]
        if user.saldo < valor_compra
            render json: {message: "Saldo insuficiente"}, status: :bad_request
        
        else
            user.saldo -= valor_compra
            user.save
            user_investments = user.investments.joins(:stock).where(stock: {id: params[:stock_id]}).first
            if user_investments
              user_investments.quantidade += params[:quantity]
              user_investments.save
            else  
              user.investments.create(
                stock: stock, 
                quantidade: params[:quantity])
            end

            render json: {message: "Compra bem-sucessida"}, status: :ok
            return
        end

    end 

    def index
        user = User.find(1)
        investments = user.investments.includes(:stock)
        render json: investments.to_json(include: :stock)
    end

    def vender
        user = User.find(1)
        investimet = user.investments.find(params[:investment_id])
        stock = investimet.stock
        value_add = params[:quantity] * stock.cotacao
        user.saldo += value_add
        user.save
        stock.volume += params[:quantity]
        stock.save

        if params[:quantity] > investimet.quantidade
           render json: {message: "Quantidade excedida"}, status: :bad_request
        else

          if params[:quantity] == investimet.quantidade
            investimet.destroy

          else 
            investimet.quantidade -= params[:quantity]
            investimet.save
          end

          investments = user.investments.includes(:stock)
          render json: investments.to_json(include: :stock)
        end
    end

    private
    def investment_params
        params.require(:investment).permit(:stock_id, :quantity, :investment_id)
    end
end
