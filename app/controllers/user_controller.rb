class UserController < ApplicationController

    def show
        if session[:company_id]
            company = Company.find_by(id: session[:company_id])
            render json: company, status: :created
        elsif session[:contractor_id]
            contractor = Contractor.find_by(id: session[:contractor_id])
            render json: contractor, status: :created
        else
            render json: {errors: "Inside usercontroller"}
        end
    end

end
