class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :set_current_user

    def set_current_user
      if session[:contractor_id]
        @current_user = Contractor.find_by(id: session[:contractor_id])
      else
        @current_user = Company.find_by(id: session[:company_id])
      end
    end

end
