Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  get "/api/stocks", to: "stocks#index"
  get "/api/stocks/pages", to: "stocks#all_pages_stock"
  get "/api/stocks/search", to: "stocks#seach_stock"
  get "/api/stocks/:id", to: "stocks#show"
  get "/api/news", to: "news#get_news"
  get "/api/news/filter", to: "news#filter_news"
  get "/api/news/pages", to: "news#get_all_pages_of_news"
  get "/api/topics", to: "topic#index"
  get "/api/transactions", to: "transaction#index"
  post "/api/transactions", to: "transaction#criar_transacao"
  patch "/api/transactions/saldo", to: "transaction#atualizar_saldo"
  post "/api/investments", to: "investment#create"
  get "/api/investments", to: "investment#index"
  delete "/api/investments", to: "investment#vender"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  devise_for :users, path: "", path_names: {
    sign_in: "/api/login",
    sign_out: "/api/logout",
    registration: "/api/signup"
  },
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
