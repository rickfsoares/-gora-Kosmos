class StocksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_stock, only: %i[ show ]

  # GET /stocks
  def index
    @stocks = Stock.page(params[:page])
     puts current_user.id
    render json: @stocks
  end

  def all_pages_stock
    total_pages = Stock.page(1).total_pages
    render json: {total_pages: total_pages}
  end

  # GET /stocks/1
  def show
    service = RedisService.new
    currency = service.get_data_stock(@stock.nome)
    currency = currency.map {|element| JSON.parse(element)}
    render json: {stock: @stock, currency: currency}
  end

  def seach_stock
    @stocks = Stock.where("nome = ?", "#{params[:nome]}")
    render json: @stocks
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stock
      @stock = Stock.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stock_params
      params.require(:stock).permit(:nome, :descricao, :cotacao, :volume, :page)
    end
end
