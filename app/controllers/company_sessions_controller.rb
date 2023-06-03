class CompanySessionsController < ApplicationController

    def create
        company = Company.find_by(username: params[:username])
        if company&.authenticate(params[:password])
            session[:company_id] = company.id
            render json: company, status: :created
        else
            render json: {message: 'Invalid Username or Password'}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :company_id
        head :no_content
    end

end
