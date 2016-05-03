class Api::BoatingRequestsController < ApplicationController
  def index
    @requests = BoatingRequest.all
  end

  private
  def request_params
    params.require(:boating_request).permit(:sending_user, :receiving_user, :posting)
  end
end
