class User < ApplicationRecord
  has_secure_password
  has_many :notes
  validates :username, uniqueness: { case_sensitive: false }
end
