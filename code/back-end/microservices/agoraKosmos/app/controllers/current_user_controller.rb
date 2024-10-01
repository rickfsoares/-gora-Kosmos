class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    user = User.find(current_user.id)

    render json: user.as_json(except: [:jti, :reset_password_token, 
                                       :encrypted_password, :reset_password_token, 
                                       :reset_password_sent_at, :remember_created_at,
                                       :created_at, :updated_at]), 
                                      status: :ok
  end 
end
