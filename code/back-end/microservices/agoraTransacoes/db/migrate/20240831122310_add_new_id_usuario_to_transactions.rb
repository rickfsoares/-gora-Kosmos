class AddNewIdUsuarioToTransactions < ActiveRecord::Migration[7.2]
  def change
    add_column :transactions, :id_usuario, :integer
  end
end
