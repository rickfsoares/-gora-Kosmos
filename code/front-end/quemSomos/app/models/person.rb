class Person < ApplicationRecord
    has_many :phones

    accepts_nested_attributes_for :phones, reject_if: :all_blank, allow_destroy: true

    validates :nome, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: true }, format: { with: URI::MailTo::EMAIL_REGEXP }
    
end
