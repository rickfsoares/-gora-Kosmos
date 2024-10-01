class Mission < ApplicationRecord
    belongs_to :level
    has_many :user_missions
    has_many :users, through: :user_missions
end
