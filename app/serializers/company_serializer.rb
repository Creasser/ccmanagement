class CompanySerializer < ActiveModel::Serializer
  attributes :id, :username, :company_name, :description, :pfp_image
end
