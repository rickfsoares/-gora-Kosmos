class Stock < ApplicationRecord
  paginates_per 5
  has_many :investments
end
