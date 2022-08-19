class Post < ApplicationRecord
    validates :pictureUrl, presence: true
    validates :caption, presence: true, length: { minimum: 10 }
end
