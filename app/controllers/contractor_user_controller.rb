class ContractorUserController < ApplicationController

    def create
        contractor = Contractor.create(contractor_params)
        if contractor.valid?
            session[:contractor_id]
            render json: contractor, status: :created
        else
            render json: {errors: contractor.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def contractor_params
         params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :bio)
    end

end
