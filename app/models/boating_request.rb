class BoatingRequest < ActiveRecord::Base
  validates :posting_id, :uniqueness => { :scope => [:sending_user_id] }
  belongs_to :requester,
    primary_key: :id,
    foreign_key: :sending_user_id,
    class_name: :User

  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiving_user_id,
    class_name: :User

  belongs_to :posting

  has_one :lake,
    through: :posting

end
