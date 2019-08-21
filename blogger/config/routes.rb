Rails.application.routes.draw do |map|
  root to: 'articles#index'
  resources :articles do
    resources :comments
  end
  resources :tags
  resources :sessions

  get '/login', to: 'sessions#index'
  get '/logout', to: 'sessions#destroy'
end
