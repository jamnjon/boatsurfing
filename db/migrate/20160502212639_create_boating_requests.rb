class CreateBoatingRequests < ActiveRecord::Migration
  def change
    create_table :boating_requests do |t|
      t.string :status, default: "pending"
      t.integer :sending_user_id, null: false
      t.integer :receiving_user_id, null: false
      t.integer :posting_id, null: false

      t.timestamps null: false
    end
    add_index :boating_requests, :sending_user_id
    add_index :boating_requests, :receiving_user_id
    add_index :boating_requests, :posting_id
  end
end
