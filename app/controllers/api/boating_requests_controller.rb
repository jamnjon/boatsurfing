class Api::BoatingRequestsController < ApplicationController
  def index
    @requests = BoatingRequest.includes(:posting, :lake, :receiver, :requester).all
  end

  def create
    @request = BoatingRequest.new(request_params)
    if @request.save
      render 'api/boating_requests/index'
    end
  end

  def update
    @request = BoatingRequest.find(params[:id])
    @request.update_attributes(request_params)
    if @request.save
      render 'api/boating_requests/index'
    end
  end

  def destroy
    @request = BoatingRequest.find(params[:id])
    @request.destroy
    render 'api/boating_requests/index'
  end

  private
  def request_params
    params.require(:boating_request).permit(:sending_user_id, :receiving_user_id, :posting, :posting_id, :status)
  end
end
