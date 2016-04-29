class AddPostingTypeCol < ActiveRecord::Migration
  def change
    add_column :postings, :posting_type, :string
  end
end
