class AddUfToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :uf, :string
  end
end
