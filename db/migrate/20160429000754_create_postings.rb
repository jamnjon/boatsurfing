class CreatePostings < ActiveRecord::Migration
  def change
    create_table :postings do |t|
      t.integer :user_id, null: false
      t.string :type, null: false
      t.datetime :start_time
      t.datetime :end_time
      t.string :boat_type, null: false
      t.string :activity, null: false
      t.integer :lake_id, null: false

      t.timestamps null: false
    end
    add_index(:postings, :user_id)
    add_index(:postings, :lake_id)
  end
end
