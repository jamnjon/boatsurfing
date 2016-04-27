class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.float :average_rating, default: 0
      t.integer :num_ratings, default: 0

      t.timestamps null: false
    end
  end
end
