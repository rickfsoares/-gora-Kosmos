class CreateNews < ActiveRecord::Migration[7.1]
  def change
    create_table :news do |t|
      t.string :title
      t.string :summary
      t.string :url
      t.string :topics
      t.string :bannerImage

      t.timestamps
    end
  end
end
