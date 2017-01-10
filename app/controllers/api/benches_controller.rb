class Api::BenchesController < ApplicationController

  def index
    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    else
      @benches = Bench.all
    end
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

end
