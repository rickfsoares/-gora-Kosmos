# frozen_string_literal: true
require 'redis'
class RedisService
  def initialize
    @redis = Redis.new(host: ENV['REDIS_HOST'], port: ENV['REDIS_PORT'])
  end

  def get_data_stock(key)
    @redis.lrange(key, 0, -1)
  end
end
