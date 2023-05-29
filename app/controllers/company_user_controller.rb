class CompanyUserController < ApplicationController

    def create
        company = Company.create(company_params)
        if company.valid?
            render json: user, status: :created
        else
            render json: {errors: 'Invalid Information'}
        end
    end

    private

    def company_params
        params.premit(:username, :password. :password_confirmation, :company_name, :description)
    end

end
