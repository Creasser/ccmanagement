class CompanySerializer < ActiveModel::Serializer
  attributes :id, :username, :company_name, :description, :pfp_image, :projects

  has_many :projects
  has_many :contractors, serializer: ContractorNameSerializer

  def contractors
    object.contractors.uniq
  end
end
