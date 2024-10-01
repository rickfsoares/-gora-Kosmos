require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user_level1 = users(:ricardo)
    @user_level2 = users(:Jonas)
    @level1 = levels(:level1)
    @level2 = levels(:level2)
  end

   # Teste para garantir que o usuário de nível 1 só tem acesso a missões de nível 1
   test "user level 1 should access only level 1 missions" do
    missions = Mission.where(level: @user_level1.level)
    assert_equal missions, @user_level1.incomplete_missions
  end

  # Teste para garantir que o usuário de nível 2 só tem acesso a missões de nível 2
  test "user level 2 should access only level 2 missions" do
    missions = Mission.where(level: @user_level2.level)
    assert_equal missions, @user_level2.incomplete_missions
  end

  # Teste para garantir que o usuário só vai ter acesso as missões que ele ainda não completou

end
