class Api::PostingsController < ApplicationController
  def index
    @postings = Posting.all
    render "api/postings/index"
  end

  def show

  end

  private

  def posting_params
    params.require(:posting).permit(:posting_type, :activity, :start_time,
    :end_time, :user_id, :lake_id, :boat_type)
  end
end
