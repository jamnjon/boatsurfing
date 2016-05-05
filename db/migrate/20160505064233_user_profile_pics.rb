class UserProfilePics < ActiveRecord::Migration
  def change
    add_column :users, :profile_pic_url, :text, default: "http://s7d2.scene7.com/is/image/Fathead/lgo_nhl_san_jose_sharks?layer=comp&fit=constrain&hei=300&wid=300&fmt=png-alpha&qlt=95,0&op_sharpen=1&resMode=bicub&op_usm=0.0,0.0,0,0&iccEmbed=0"
  end
end
