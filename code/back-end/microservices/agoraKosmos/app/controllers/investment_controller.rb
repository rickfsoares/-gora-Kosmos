class InvestmentController < ApplicationController
    before_action :authenticate_user!

    def create
        stock = Stock.find(params[:stock_id])
        user  = User.find(current_user.id)
        if user.saldo < stock.valor
            render json: {message: "Saldo insuficiente"}, status: :bad_request
        
        else
            
            return
        end

    end 

    private
    def investment_params
        params.require(:investment).permit(:stock_id, :quantity)
    end
end
