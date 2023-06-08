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

    def update
        if session[:company_id]
            project = @current_user.projects.find(params[:id])
            project.update(project_params)
            if project.valid?
                render json: project, status: :created
            else
                render json: {errors: 'Not working'}, status: :unprocessable_entity
            end
        else
            project = Project.find_by(id: params[:id])
            project.update(
                project.contractor_id = @current_user.id
            )
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
        params.permit(:project_title, :description, :start_date, :deadline, :price)
    end

end
