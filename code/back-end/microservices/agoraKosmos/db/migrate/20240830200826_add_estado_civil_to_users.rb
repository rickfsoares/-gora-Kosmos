class AddEstadoCivilToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :estadoCivil, :string
  end
end
