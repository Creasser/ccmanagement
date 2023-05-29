class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :username
      t.string :password_digest
      t.string :company_name
      t.string :description
      t.string :pfp_image

      t.timestamps
    end
  end
end
