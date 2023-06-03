class CreateContractor < ActiveRecord::Migration[6.1]
  def change
    create_table :contractors do |t|
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :pfp_image
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
