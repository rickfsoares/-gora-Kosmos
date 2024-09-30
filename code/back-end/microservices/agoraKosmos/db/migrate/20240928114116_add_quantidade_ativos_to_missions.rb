class AddQuantidadeAtivosToMissions < ActiveRecord::Migration[7.1]
  def change
    add_column :missions, :quantidade_ativos, :integer
  end
end
