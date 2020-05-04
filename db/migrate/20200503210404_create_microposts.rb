class CreateMicroposts < ActiveRecord::Migration[5.1]
  def change
    create_table :microposts do |t|
      t.date :date
      t.string :first
      t.string :second
      t.string :third
      t.string :fourth
      t.string :fifth
      t.string :sixth
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :microposts, [:user_id, :date]
  end
end
