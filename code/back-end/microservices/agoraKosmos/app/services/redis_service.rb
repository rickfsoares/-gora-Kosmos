# frozen_string_literal: true
require 'redis'
class RedisService
  def initialize
    @redis = Redis.new(host: ENV['REDIS_HOST'], port: ENV['REDIS_PORT'])
  end

  def get_data_stock(key)
    @redis.lrange(key, 0, -1)
  end

  def add_user_to_ranking_week(name) 
    @redis.zadd('ranking_week', 0, name)
  end

  def get_ranking_week
    @redis.zrevrange('ranking_week', 0, -1, with_scores: true)
  end


  def add_user_to_ranking_global(name) 
    @redis.zadd('ranking_global', 0, name)
  end

  def get_ranking_global()
    @redis.zrevrange('ranking_global', 0, -1, with_scores: true)
  end

  def add_xp_to_user(name, xp)
    @redis.zincrby('ranking_week', xp, name)
    @redis.zincrby('ranking_global', xp, name)
  end

end
