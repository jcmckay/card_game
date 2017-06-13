require 'ruby_playing_cards'

class HomeController < ApplicationController
  include RubyPlayingCards

  def index
    deck = Deck.new
    Dealer.shuffle deck
    @hands = Dealer.deal deck, player_count: 1, hand_size: 5

    respond_to do |format|
      format.html {}
      format.json do
        render json: @hands
      end
    end
  end
end