class BoatingRequest < ActiveRecord::Base
  belongs_to :requester,
    primary_key: :id,
    foreign_key: :sending_user_id,
    class_name: :User

  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiving_user_id,
    class_name: :User

  belongs_to :posting

  def lake
    posting.lake
  end
end
