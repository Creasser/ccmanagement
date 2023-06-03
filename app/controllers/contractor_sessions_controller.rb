class ContractorSessionsController < ApplicationController

    def create
        contractor = Contractor.find_by(username: params[:username])
        if contractor&.authenticate(params[:password])
            session[:contractor_id] = contractor.id
            render json: contractor, status: :created
        else
            render json: {errors: 'Invaid Username or Password'}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :contractor_id
        head :no_content
    end

end
