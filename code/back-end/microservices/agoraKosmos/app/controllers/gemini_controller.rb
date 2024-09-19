class GeminiController < ApplicationController
  before_action :authenticate_user!
  def index
    begin
      authorize! :index, :gemini
      render json: { message: 'Hello from Gemini!' }
    rescue CanCan::AccessDenied => e
      render json: { message: "Acesso negado" }, status: :forbidden
    end
  end
end
