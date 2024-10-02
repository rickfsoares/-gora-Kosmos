class RankingController < ApplicationController
    before_action :authenticate_user!

    def ranking_week
        ranking = RedisService.new.get_ranking_week
        data = ranking.map do |element|
            {name: element[0], xp: element[1]}
        end
        render json: data
    end

    def ranking_global
        ranking = RedisService.new.get_ranking_global
        data = ranking.map do |element|
            {name: element[0], xp: element[1]}
        end
        render json: data
    end

end
