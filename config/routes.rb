Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :lakes, only: [:index] do
      resources :postings, only: [:index, :create]
    end
    resources :boating_requests, only: [:create, :show, :destroy, :index, :update]
  end

  root "static_pages#root"
end
