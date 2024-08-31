class AddEnderecoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :endereco, :string
  end
end
