class TransactionsController < ApplicationController
  def criarPagamento
    transacao = TransacaoService.criar_transacao(params[:valor], params[:id_usuario])
    RabbitMqService.publish(transacao)
    RabbitMqService.subscribe    
    render json: {message: "Pagamento criado com sucesso!"}
    # render json: transacaoService.criar_transacao(2)

  end
  # GET /transactions

  def index
    @transactions = Transaction.where(id_usuario: params[:id_usuario], status: 'pending')
    render json: @transactions
  end

  private
    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:idMercadoPago, :status, :valor, :qrCodeBase64, :qrCode, :id_usuario, :id)
    end
end
