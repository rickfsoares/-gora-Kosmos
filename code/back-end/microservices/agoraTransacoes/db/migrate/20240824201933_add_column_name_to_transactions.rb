class AddColumnNameToTransactions < ActiveRecord::Migration[7.2]
  def change
    add_column :transactions, :dataCriacao, :timestamp
  end
end
