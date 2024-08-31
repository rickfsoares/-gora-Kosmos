class AddCidadeToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :cidade, :string
  end
end
