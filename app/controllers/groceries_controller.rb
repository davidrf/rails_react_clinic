class GroceriesController < ApplicationController
  def index
    @grocery = Grocery.new
    @groceries = Grocery.all
  end

  def create
    @grocery = Grocery.new(grocery_params)
    if @grocery.save
      redirect_to groceries_path
    else
      @groceries = Grocery.all
      render :new
    end
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name)
  end
end
