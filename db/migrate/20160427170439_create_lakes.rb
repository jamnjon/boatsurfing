class CreateLakes < ActiveRecord::Migration
  def change
    create_table :lakes do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
