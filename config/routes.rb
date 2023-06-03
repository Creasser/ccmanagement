Rails.application.routes.draw do
  
  #resources :contractors
  #resources :companies
  #Company Login/Signup
  post "/companysignup", to: "company_user#create"
  post "/companylogin", to: "company_sessions#create"
  #Contractor Login/Signup
  post "/contractorsignup", to: "contractor_user#create"
  post "/contractorlogin", to: "contractor_sessions#create"
  get "/me", to: "user#show"
  delete "/companylogout", to: "company_sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
