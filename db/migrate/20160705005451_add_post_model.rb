class AddPostModel < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :category
      t.text :post_content
      t.text :tags, array: true, default: []
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
