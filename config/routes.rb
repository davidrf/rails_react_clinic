Rails.application.routes.draw do
  root 'groceries#index'

  resources :groceries, only: [:index, :create]

  namespace :api do
    resources :groceries, only: [:index, :create]
  end
end
