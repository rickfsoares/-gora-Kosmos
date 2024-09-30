class MissionController < ApplicationController
    before_action :authenticate_user!
    
    def index
        user = User.find(current_user.id)
        render json: user.incomplete_missions.to_json

    end     
end
