require "test_helper"

class UserMissionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @user_level1 = users(:ricardo)
    @level1 = levels(:level1)
    @mission1 = missions(:missao1)
    @mission2 = missions(:missao2)

    @user_level1.missions << @mission1
    @user_level1.missions << @mission2

  

  end 

  test "user should access only incomplete missions" do
    missions = UserMission.where(user: @user_level1).map(&:mission)
    assert_not_equal missions, @user_level1.incomplete_missions
  end
end
