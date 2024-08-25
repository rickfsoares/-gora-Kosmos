class AddTopicsToNews < ActiveRecord::Migration[7.1]
  def change
    add_reference :news, :topic, null: false, foreign_key: true
  end
end
