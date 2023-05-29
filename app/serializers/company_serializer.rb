class CompanySerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :company_name, :description, :pfp_image
end
