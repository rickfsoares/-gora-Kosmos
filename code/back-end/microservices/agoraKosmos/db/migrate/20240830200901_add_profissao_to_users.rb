class AddProfissaoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :profissao, :string
  end
end
