class ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects, status: :created
    end

    def create
        project = @current_user.projects.create(project_params)
        if project.valid?
            render json: project, status: :created
        else
            render json: {errors: 'Project is invalid'}, status: :unprocessable_entity
        end
    end

    def destroy
        if session[:company_id]
            project = Project.find(params[:id])
            project.destroy
            head :no_content
        else
            render json: {errors: 'Not authorized'}, status: :unauthorized
        end
    end

    private

    def project_params
        params.permit(:project_title, :description, :start_date, :deadline, :price)
    end

end
