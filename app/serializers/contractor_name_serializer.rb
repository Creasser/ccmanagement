class ContractorNameSerializer < ActiveModel::Serializer
  attributes :name

  def name
    "#{self.object.first_name} #{self.object.last_name}"
  end
  
end
