require "test_helper"

class LevelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user_level1 = users(:ricardo)
    @level1 = levels(:level1)
    @mission1 = missions(:missao1)
    @mission2 = missions(:missao2)
    @mission3 = missions(:missao3)

    @user_level1.missions << @mission1
    @user_level1.missions << @mission2
    @user_level1.missions << @mission3
    @level2 = levels(:level2)

  end

  test "user should access pass the nivel" do
    @user_level1.pass_level_up
    assert_equal @level2, @user_level1.level
  end
end
