Rails.application.routes.draw do
  
  resources :projects, only: [:index, :create]
  #resources :contractors
  #resources :companies
  #Initial Fetch for Previous Users
  get "/me", to: "user#show"

  #Company Login/Signup/Logout
  post "/companysignup", to: "company_user#create"
  post "/companylogin", to: "company_sessions#create"
  delete "/companylogout", to: "company_sessions#destroy"

  #Contractor Login/Signup/Logout
  post "/contractorsignup", to: "contractor_user#create"
  post "/contractorlogin", to: "contractor_sessions#create"
  delete "/contractorlogout", to: "contractor_sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
