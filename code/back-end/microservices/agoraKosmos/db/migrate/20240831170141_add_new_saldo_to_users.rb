class AddNewSaldoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :saldo, :decimal
  end
end
