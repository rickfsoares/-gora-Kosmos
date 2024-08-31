class AddApelidoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :apelido, :string
  end
end
