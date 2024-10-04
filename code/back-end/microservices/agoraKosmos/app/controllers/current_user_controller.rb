class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    user = User.find(current_user.id)


    user_json = user.as_json(except: [:jti, :reset_password_token, 
                                       :encrypted_password, :reset_password_token, 
                                       :reset_password_sent_at, :remember_created_at,
                                       :created_at, :updated_at])
                                       
    user_json['level_id'] = user.level.nivel
    render json: user_json, status: :ok

  end 

  def become_premium
    user = User.find(current_user.id)
    if user.saldo >= 2
      user.premium = true
      user.saldo -= 2
      user.save!
      render json: {premium: true}, status: :ok
    else
      render json: {message: 'Saldo insuficiente'}, status: :bad_request
    end
  end
end
