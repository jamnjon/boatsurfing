class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :status, default: "pending"
      t.integer :sending_user_id, null: false
      t.integer :receiving_user_id, null: false
      t.integer :posting_id, null: false

      t.timestamps null: false
    end
    add_index :requests, :sending_user_id
    add_index :requests, :receiving_user_id
    add_index :requests, :posting_id
  end
end
