class AddOpeningAndClosingPriceToStocks < ActiveRecord::Migration[7.1]
  def change
    add_column :stocks, :opening_price, :decimal
    add_column :stocks, :closing_price, :decimal
  end
end
