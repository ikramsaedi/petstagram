Rails.application.routes.draw do
  root "posts#index"
  resources :posts do
    resources :comments
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

end
