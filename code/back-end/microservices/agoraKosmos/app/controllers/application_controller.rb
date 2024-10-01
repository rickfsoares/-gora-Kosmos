class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: %i[endereco uf cidade apelido estadoCivil profissao renda cpf telefone nome cep])
        devise_parameter_sanitizer.permit(:account_update, keys: %i[endereco uf cidade apelido email cpf estadoCivil profissao renda telefone cep nome current_password])
    end
end
