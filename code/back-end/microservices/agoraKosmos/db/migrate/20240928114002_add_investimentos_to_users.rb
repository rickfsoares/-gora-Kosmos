class AddInvestimentosToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :investimentos, :integer
  end
end
