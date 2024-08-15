class News < ApplicationRecord
  belongs_to :topic
  paginates_per 5
end
