class CreatePhones < ActiveRecord::Migration[7.2]
  def change
    create_table :phones do |t|
      t.string :numero
      t.references :person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
