class ContractorUserController < ApplicationController

    def create
        contractor = Contractor.create(contractor_params)
        if contractor.valid?
            session[:contractor_id]
            render json: contractor, status: :created
        else
            render json: {errors: 'Invalid Information - Contractor'}
        end
    end

    private

    def contractor_params
         params.premit(:username, :password, :password_confirmation, :first_name, :last_name)
    end

end
