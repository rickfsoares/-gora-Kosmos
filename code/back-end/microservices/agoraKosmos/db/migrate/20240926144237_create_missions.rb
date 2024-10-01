class CreateMissions < ActiveRecord::Migration[7.1]
  def change
    create_table :missions do |t|
      t.string :nome
      t.string :descricao
      t.integer :xp

      t.timestamps
    end
  end
end
