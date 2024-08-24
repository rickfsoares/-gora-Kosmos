class CreateTransactions < ActiveRecord::Migration[7.2]
  def change
    create_table :transactions do |t|
      t.integer :idMercadoPago
      t.string :status
      t.decimal :valor
      t.string :qrCodeBase64
      t.string :qrCode

      t.timestamps
    end
  end
end
