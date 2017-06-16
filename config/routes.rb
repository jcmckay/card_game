Rails.application.routes.draw do
  resources :decks do
    resources :cards
  end
  
  resources :hands
  resources :players
  
  get 'home/index'
  get '/', to: 'home#index'
end
