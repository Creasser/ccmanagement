class Contractor < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true, length: {in: 8..20}
    validates :bio, length: {maximum: 500}
    validates :first_name, presence: true
    validates :last_name, presence: true
end
