class RemoveUserFromMissions < ActiveRecord::Migration[7.1]
  def change
    remove_reference :missions, :user, null: false, foreign_key: true
  end
end
