class User < ApplicationRecord
  
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :investments
  has_many :user_missions
  has_many :missions, through: :user_missions

  belongs_to :level
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

  def incomplete_missions
    level_missions = self.level.missions
    completed_missions = self.missions
    level_missions.where.not(id: completed_missions.pluck(:id))
  end

  def pass_level_up
    redis = RedisService.new
    self.incomplete_missions.each do |mission|
      if mission.quantidade_ativos <= self.investimentos
        self.missions << mission
        self.xp += mission.xp
        redis.add_xp_to_user(self.apelido, mission.xp)
        self.save
      end
    end
    if self.incomplete_missions.count == 0
      next_level = Level.find_by(nivel: self.level.nivel + 1)
      if next_level
        self.level = next_level
        self.save
      end
    end
  end
  
  private


  devise :database_authenticatable, :registerable,
         :recoverable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self
end
