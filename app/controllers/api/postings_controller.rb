class Api::PostingsController < ApplicationController
  def index
    @postings = Posting.includes(:user).all
    render "api/postings/index"
  end

  def create
    posting = params['posting']
    date = posting['date']
    yr = date.slice(0,4).to_i
    month = date.slice(5,7).to_i
    day = date.slice(8,date.length).to_i
    s_time = posting['startTimeString']
    s_hr = s_time.slice(0,2).to_i
    s_min = s_time.slice(3,s_time.length).to_i
    e_time = posting['endTimeString']
    e_hr = e_time.slice(0,2).to_i
    e_min = e_time.slice(3,e_time.length).to_i
    @posting = Posting.new(
      posting_type: posting['posting_type'],
      activity: posting['activity'],
      user_id: posting['user_id'],
      start_time: DateTime.new(yr, month, day, s_hr, s_min, 0),
      end_time: DateTime.new(yr, month, day, e_hr, e_min, 0),
      lake_id: posting['lake_id'],
      boat_type: posting['boat_type']
    )
    if @posting.save
      render "api/postings/index"
    end
  end

  # Posting.create(user_id: user,
  # start_time: DateTime.new(2016, month, day, start_hour, 0, 0), end_time:
  # DateTime.new(2016, month, day, end_hour, 0, 0), boat_type: boat,
  # lake_id: lake, activity: sport, posting_type: "Hosts")

  private

  def posting_params
    params.require(:posting).permit(:posting_type, :activity, :start_time,
    :end_time, :user_id, :lake_id, :boat_type, :startTimeString, :date,
    :endTimeString)
  end
end
