class CreatePeople < ActiveRecord::Migration[7.2]
  def change
    create_table :people do |t|
      t.string :nome
      t.string :email

      t.timestamps
    end
  end
end
