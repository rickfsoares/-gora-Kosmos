require 'bunny'

class RabbitMqService 
    @@connection = Bunny.new(host="amqp://guest:guest@rabbitmq:5672")
    @@connection.start
    @@channel = @@connection.create_channel
    @@queue = @@channel.queue('transacao', :durable => true, :auto_delete => false)
    @@exchange = @@channel.default_exchange
    @@count = 0
    

    def self.publish(message)
        message = message.to_json 
        @@exchange.publish(message, :persistent => true, :routing_key => @@queue.name)

    end

    def self.subscribe
        if @@count == 0
            @@queue.subscribe(:manual_ack => true) do  |delivery_info, properties, body|
                message = JSON.parse(body)
                transacao = TransacaoService.buscar_transacao(message["idMercadoPago"])
                if TransacaoService.verificarTransacaoPaga(transacao) == false
                    self.publish(message)
                    puts message

                else
                    Transaction.find(message["id"]).update(status: "approved")
                    puts message
                end
                @@channel.ack(delivery_info.delivery_tag, false)
            end
            @@count += 1
        end
    end
end


    
    