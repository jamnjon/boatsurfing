class ReplaceTypeColumn < ActiveRecord::Migration
  def up
    remove_column :postings, :type
  end

  def down
    add_column :postings, :posting_type, :string
  end
end
