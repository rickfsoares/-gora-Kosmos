class AddLevelToUsers < ActiveRecord::Migration[7.1]
  def change
    add_reference :users, :level, null: false, foreign_key: true
  end
end
