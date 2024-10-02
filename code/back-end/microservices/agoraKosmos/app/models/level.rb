class Level < ApplicationRecord
    has_many :missions
    has_many :users
end
