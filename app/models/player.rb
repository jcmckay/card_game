require 'securerandom'

class Player

  attr_reader :name
  attr_accessor :hand

  def initialize(name, hand=nil)
    @id = SecureRandom.uuid
    @name = name
    @hand = hand
  end

end