class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :start_date, :deadline, :price, :project_title, :company_id, :contractor_id
end
