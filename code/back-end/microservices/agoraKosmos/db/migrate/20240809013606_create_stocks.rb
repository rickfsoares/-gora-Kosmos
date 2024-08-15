class CreateStocks < ActiveRecord::Migration[7.1]
  def change
    create_table :stocks do |t|
      t.string :nome
      t.string :descricao
      t.decimal :cotacao
      t.integer :volume

      t.timestamps
    end
  end
end
