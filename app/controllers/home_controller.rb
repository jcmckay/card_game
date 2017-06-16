class HomeController < ApplicationController
  include RubyPlayingCards

  def index
    deck = Deck.new
    Dealer.shuffle deck
    # session[:deck] = deck
  end
end