class StocksController < ApplicationController
  before_action :set_stock, only: %i[ show ]

  # GET /stocks
  def index
    @stocks = Stock.page(params[:page])
    render json: @stocks
  end

  def all_pages_stock
    total_pages = Stock.page(1).total_pages
    render json: {total_page: total_pages}
  end

  # GET /stocks/1
  def show
    service = RedisService.new
    currency = service.get_data_stock(@stock.nome)
    currency = currency.map {|element| JSON.parse(element)}
    render json: {stock: @stock, opening_price: @stock.opening_price, closing_price: @stock.closing_price , currency: currency}
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
      params.require(:stock).permit(:nome, :descricao, :cotacao, :volume, :page, :opening_price, :closing_price)
    end
end
