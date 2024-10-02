# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  include RackSessionsFix
  respond_to :json

  def update
    if resource.update_without_password(account_update_params)
      render json: { message: 'User updated successfully' }, status: :ok
    else
      Rails.logger.debug("Errors: #{resource.errors.full_messages}")
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
    
  end

  def destroy
    if user_signed_in?
      begin
        current_user.missions.clear
        current_user.save!
        current_user.destroy
        render json: { message: 'Account deleted successfully' }, status: :ok
      rescue ActiveRecord::InvalidForeignKey => e
        render json: { error: "Usuário não pode ser deletado pois possui ativos" }, status: :bad_request
      end

    else
      render json: { error: 'Not authenticated' }, status: :unauthorized
    end
  end


  

  def create
    build_resource(sign_up_params)

    # Set the default level_id
    resource.level = Level.find_by(nivel: 1)
    resource.saldo = 0.0
    resource.investimentos = 0
    resource.xp = 0
    resource.premium = false


    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        set_flash_message! :notice, :signed_up
        sign_up(resource_name, resource)
        respond_with_create resource, location: after_sign_up_path_for(resource)
      else
        set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
        respond_with_create resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      respond_with_create resource
    end
  end

  private 
    def respond_with_create(current_user, _opts = {})
      if resource.persisted?
        service = RedisService.new
        service.add_user_to_ranking_week(current_user.apelido)
        service.add_user_to_ranking_global(current_user.apelido)
        render json: {
          status: {code: 200, message: 'Signed up successfully.'},
          data: UserSerializer.new(current_user).serializable_hash[:data][:attributes]
        }
      else
        render json: {
          status: {message: "User couldn't be created successfully. #{current_user.errors.full_messages.to_sentence}"}
        }, status: :unprocessable_entity
      end
    end


  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  def configure_sign_up_params

    devise_parameter_sanitizer.permit(:sign_up, keys: [:level])


  end
  def account_update_params
    params.require(:user).permit(:nome, :endereco, :uf, :cidade, :apelido, :profissao, :renda, :estadoCivil, :telefone, :cep)
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
