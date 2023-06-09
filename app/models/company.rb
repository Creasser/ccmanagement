class Company < ApplicationRecord
    has_many :projects
    has_many :contractors, through: :projects
    has_secure_password
    validates :username, uniqueness: true, presence: true, length: {in: 8..20}
    validates :company_name, uniqueness: true, presence: true
    validates :description, length: {maximum: 500}
end
