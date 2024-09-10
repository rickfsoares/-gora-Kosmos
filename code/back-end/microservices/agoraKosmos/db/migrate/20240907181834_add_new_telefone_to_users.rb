class AddNewTelefoneToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :telefone, :string
  end
end
