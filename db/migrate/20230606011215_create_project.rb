class CreateProject < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.integer :company_id
      t.string :description
      t.string :start_date
      t.string :deadline
      t.integer :contractor_id
      t.string :project_title
      t.integer :price

      t.timestamps
    end
  end
end
