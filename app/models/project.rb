class Project < ApplicationRecord
    belongs_to :company
    belongs_to :contractor
    validates :project_title, length: {in: 1..50}, presence: true
    validates :price, presence: true
    validates :start_date, presence: true
    validates :deadline, presence: true
    validates :description, presence: true
end
