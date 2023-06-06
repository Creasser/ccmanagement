class ProjectsController < ApplicationController

    def create
        project = @current_user.projects.create(project_params)
        if project.valid?
            render json: project, status: :created
        else
            render json: {errors: 'Project is invalid'}, status: :unprocessable_entity
        end
    end

    private

    def project_params
        params.permit(:project_title, :description, :start_date, :deadline, :price)
    end

end
