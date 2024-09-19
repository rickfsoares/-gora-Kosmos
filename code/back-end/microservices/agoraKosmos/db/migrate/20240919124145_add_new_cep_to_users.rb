class AddNewCepToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :cep, :string
  end
end
