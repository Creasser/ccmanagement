class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :pfp_image, :bio
end
