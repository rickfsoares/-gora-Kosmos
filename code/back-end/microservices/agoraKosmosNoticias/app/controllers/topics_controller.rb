class TopicsController < ApplicationController

  # GET /topics
  def index
    @topics = Topic.all

    render json: @topics
  end

  private
    # Only allow a list of trusted parameters through.
    def topic_params
      params.require(:topic).permit(:nome)
    end
end
