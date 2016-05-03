class Posting < ActiveRecord::Base
  belongs_to :user
  belongs_to :lake

  has_many :boating_requests
end
