class Api::LakesController < ApplicationController
  def index
    @lakes = Lake.all
  end
end
