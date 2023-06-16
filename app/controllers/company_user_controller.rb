class CompanyUserController < ApplicationController

    def create
        company = Company.create(company_params)
        if company.valid?
            session[:company_id] = company.id
            render json: company, status: :created
        else
            render json: {errors: company.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def company_params
        params.permit(:username, :password, :password_confirmation, :company_name, :description)
    end

end
