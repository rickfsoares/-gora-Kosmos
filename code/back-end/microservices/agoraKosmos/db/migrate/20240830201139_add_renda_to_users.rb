class AddRendaToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :renda, :decimal
  end
end
