class CompanyUserController < ApplicationController

    def create
        company = Company.create(company_params)
        if company.valid?
            render json: company, status: :created
        else
            render json: {errors: 'Invalid Information'}, status: :unprocessable_entity
        end
    end

    private

    def company_params
        params.permit(:username, :password, :password_confirmation, :company_name, :description, :company_user)
    end

end
