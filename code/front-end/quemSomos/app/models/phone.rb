class Phone < ApplicationRecord
  belongs_to :person

  validates :numero, presence: true, numericality: { only_integer: false }, length: { minimum: 9, maximum: 9 }
end
