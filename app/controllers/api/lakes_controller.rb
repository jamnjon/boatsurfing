class Api::LakesController < ApplicationController
  def index
    @lakes = Lake.includes(:postings).all
  end
end
