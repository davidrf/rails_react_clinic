class Api::GroceriesController < ApiController
  # curl localhost:3000/api/groceries.json --header 'Content-Type: application/json'
  def index
    respond_to do |format|
      format.json do
        @groceries = Grocery.all
        render json: @groceries
      end
    end
  end

  # curl localhost:3000/api/groceries.json --header 'Content-Type: application/json' --data '{"grocery":{"name":"test"}}'
  def create
    respond_to do |format|
      format.json do
        @grocery = Grocery.new(grocery_params)

        if @grocery.save
          render json: @grocery, status: 201
        else
          render json: :nothing, status: 422
        end
      end
    end
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name)
  end
end
