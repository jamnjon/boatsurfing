class AddImagesUrlToLakes < ActiveRecord::Migration
  def change
    add_column :lakes, :image_url, :string
  end
end
