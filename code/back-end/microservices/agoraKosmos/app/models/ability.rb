# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    if user.nil?
      user ||= User.new
    
    else 
      user ||= User.find(user.id) # guest user (not logged in)
    end

    return unless user.premium?
    can :index, :gemini

  end
end
