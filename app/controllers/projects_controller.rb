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
            render json: {errors: project.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        if session[:company_id]
            project = @current_user.projects.find(params[:id])
            project.update(project_params)
            if project.valid?
                render json: project, status: :created
            else
                render json: {errors: project.errors.full_messages}, status: :unprocessable_entity
            end
        else
            project = Project.find_by(id: params[:id])
            project.update(project_params)
            render json: project, status: :created
        end
    end

    def destroy
            project = @current_user.projects.find(params[:id])
            project.destroy
            head :no_content
    end
    

    private

    def project_params
        params.permit(:project_title, :description, :start_date, :deadline, :price, :contractor_id)
    end

end
