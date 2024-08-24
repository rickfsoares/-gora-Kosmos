class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show update destroy ]

  

  def criarPagamento
    transacaoService = TransacaoService.new
    render json: transacaoService.criar_transacao(2)

  end

  def getTransacao
    transacaoService = TransacaoService.new
    render json: transacaoService.buscar_transacao(86099455864)
  end
  # GET /transactions

  def index
    @transactions = Transaction.all

    render json: @transactions
  end

  # GET /transactions/1
  def show
    render json: @transaction
  end

  # POST /transactions
  def create
    @transaction = Transaction.new(transaction_params)

    if @transaction.save
      render json: @transaction, status: :created, location: @transaction
    else
      render json: @transaction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /transactions/1
  def update
    if @transaction.update(transaction_params)
      render json: @transaction
    else
      render json: @transaction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transactions/1
  def destroy
    @transaction.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:idMercadoPago, :status, :valor, :qrCodeBase64, :qrCode)
    end
end
