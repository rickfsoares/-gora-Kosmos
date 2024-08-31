class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if: :devise_controller?
  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[endereco uf cidade apelido estadoCivil profissao renda])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[endereco uf cidade apelido estadoCivil profissao renda])
  end
end
