require 'mercadopago'
require 'bunny'

class TransacaoService
    def initialize
        @mercadoPago = Mercadopago::SDK.new(ENV['ACESS_TOKEN'])
    end

    def criar_transacao(valor) 
        valor = 2
        payment_request = {
            transaction_amount: valor,
            description: 'ativo',
            payment_method_id: 'pix',
            payer: {
                email: ENV['EMAIL'],
                identification: {
                type: 'CPF',
                number: ENV['CPF'],
                }
            }
        }
        payment_response = @mercadoPago.payment.create(payment_request)
        result = payment_response[:response]
        transaction = Transaction.create(idMercadoPago: result['id'], status: result['status'], valor: valor, qrCodeBase64: result['transaction_data']['qr_code_base64'], qrCode: result['transaction_data']['qr_code'], dataCriacao: result["date_created"])
        transaction.save

        
    end

    def buscar_transacao(id)
        payment_response = @mercadoPago.payment.get(id)
        result = payment_response[:response]
        result
    end

    def verificarTransacaoPaga(result)
        if result['status'] == 'approved' && result['status_detail'] == 'accredited'
            return true
        else
            return false
        end
    end

end