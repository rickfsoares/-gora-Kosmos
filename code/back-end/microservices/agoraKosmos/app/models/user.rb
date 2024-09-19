class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :investments
  validates :email, presence: true, uniqueness: { case_sensitive: true }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :endereco, presence: true, length: { minimum: 4, maximum: 50 }
  validates :uf, presence: true, length: { minimum: 2, maximum: 2 }
  validates :cidade, presence: true, length: { minimum: 4, maximum: 50 }
  validates :apelido, presence: true, uniqueness: true, length: { minimum: 4, maximum: 50 }
  validates :estadoCivil, presence: true, inclusion: { in: %w(solteiro(a) casado(a) divorciado(a) viúvo(a)) }
  validates :profissao, presence: true
  validates :renda, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :cpf, presence: true, uniqueness: { case_sensitive: true }
  validates :telefone, presence: true, length: { minimum: 11, maximum: 11 }
  validates :nome, presence: true, length: { minimum: 4, maximum: 50 }
  validates :cep, presence: true, length: { minimum: 8, maximum: 8 }

  devise :database_authenticatable, :registerable,
         :recoverable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self
end
