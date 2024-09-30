class AddLevelToMissions < ActiveRecord::Migration[7.1]
  def change
    add_reference :missions, :level, null: false, foreign_key: true
  end
end
