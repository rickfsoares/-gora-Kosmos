class RemoveTopicsFromNews < ActiveRecord::Migration[7.1]
  def change
    remove_column :news, :topics, :string
  end
end
