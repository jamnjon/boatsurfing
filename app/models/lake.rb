class Lake < ActiveRecord::Base
  has_many :postings

  has_many :boating_requests,
    through: :postings,
    source: :boating_requests
end
