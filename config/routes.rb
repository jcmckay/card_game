Rails.application.routes.draw do
  resources :decks do
    resources :cards
  end
  resources :hands
  get 'home/index'

  get '/', to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
