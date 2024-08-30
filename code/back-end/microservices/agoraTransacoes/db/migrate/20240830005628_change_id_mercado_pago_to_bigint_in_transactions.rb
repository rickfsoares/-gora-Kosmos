class ChangeIdMercadoPagoToBigintInTransactions < ActiveRecord::Migration[7.2]
  def change
    change_column :transactions, :idMercadoPago, :bigint
  end
end
