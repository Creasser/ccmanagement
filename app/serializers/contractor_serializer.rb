class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :pfp_image, :bio

  has_many :projects
  has_many :companies, serializer: ProjectCompanyInfoSerializer

  def companies
    object.companies.uniq
  end
end
