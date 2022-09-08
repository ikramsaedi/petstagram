Rails.application.routes.draw do
  root "pages#index"
  
  namespace :api do 
    namespace :v1 do
      resources :posts do
        resources :comments
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "*path", to: "pages#index", via: :all
end
