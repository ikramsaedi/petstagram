class Post < ApplicationRecord
    has_many :comments

    validates :pictureUrl, presence: true
    validates :caption, presence: true, length: { minimum: 10 }
end
