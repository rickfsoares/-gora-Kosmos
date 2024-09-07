require 'bunny'
require 'net/http'
require 'bigdecimal'
require 'bigdecimal/util'

class RabbitMqService 
    @@connection = ""
    @@channelAgoraKosmos = ""
    @@queueAgoraKosmos = ""
    @@exchangeAgoraKosmos = ""
    @@count = 0
    def self.connect_to_rabbitmq
        begin

            @@connection = Bunny.new(host="amqp://guest:guest@rabbitmq:5672")
            @@connection.start
            @@channelAgoraKosmos = @@connection.create_channel
            @@queueAgoraKosmos = @@channelAgoraKosmos.queue('atualizarSaldo', :durable => true, :auto_delete => false)
            @@exchangeAgoraKosmos = @@channelAgoraKosmos.default_exchange
        rescue Bunny::TCPConnectionFailed => e
            puts "Erro ao conectar ao RabbitMQ: #{e}"
            sleep 60
            retry
        end
    end

    
    def self.subscribe
        if @@count == 0
            @@queueAgoraKosmos.subscribe(:manual_ack => true) do  |delivery_info, properties, body|
                message = JSON.parse(body)
                user = User.find(message["id_usuario"])
                puts user.id
                puts message
                if user.saldo.nil?
                    user.update(saldo: message["valor"].to_d)
                else 
                    user.update(saldo: user.saldo + message["valor"].to_d)
                end
                @@channelAgoraKosmos.ack(delivery_info.delivery_tag, false)
            end
            @@count += 1
            
        end
    end
end


    
    