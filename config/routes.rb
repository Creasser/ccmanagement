Rails.application.routes.draw do
  
  #resources :companies
  post "/companysignup", to: "company_user#create"
  post "/companylogin", to: "company_sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
