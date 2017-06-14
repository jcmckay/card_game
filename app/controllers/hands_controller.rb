class HandsController < ApplicationController
  include RubyPlayingCards
  
  def new
    deck = Deck.new
    Dealer.shuffle deck
    @hands = Dealer.deal deck, player_count: 2, hand_size: 7

    respond_to do |format|
      format.html {}
      format.json do
        render json: @hands
      end
    end
  end

end
