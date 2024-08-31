require 'mercadopago'


class TransacaoService
    @@mercadoPago = Mercadopago::SDK.new(ENV['ACESS_TOKEN'])
    
    def self.criar_transacao(valor, id_usuario) 
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
        payment_response = @@mercadoPago.payment.create(payment_request)
        result = payment_response[:response]
        puts result
        transaction = Transaction.create(
            idMercadoPago: result['id'], 
            status: result['status'], 
            valor: valor, 
            qrCodeBase64: result['point_of_interaction']['transaction_data']['qr_code_base64'], 
            qrCode: result['point_of_interaction']['transaction_data']['qr_code'], 
            dataCriacao: result["date_created"],
            id_usuario: id_usuario)
        transaction.save
        return transaction

        
    end

    def self.buscar_transacao(id)
        payment_response = @@mercadoPago.payment.get(id)
        result = payment_response[:response]
        result
    end

    def self.verificarTransacaoPaga(result)
        if result['status'] == 'approved' && result['status_detail'] == 'accredited'
            return true
        else
            return false
        end
    end
end