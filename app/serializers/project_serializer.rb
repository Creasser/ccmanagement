class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :start_date, :deadline, :price, :project_title
end