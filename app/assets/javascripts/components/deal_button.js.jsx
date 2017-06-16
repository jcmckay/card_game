function Hands (props) {
  if(!props.hands)
    return <div></div>

  return(
    <div className='hand-container'>
      { props.hands.map((hand, index) =>
        <div key={index}>
          <h3>{hand.player}</h3>
          <ul className='hand'>
            {hand.cards.map((card, index) => 
              <li key={hand.player + '-' + index} className={card.suit.color + ' card'}>{card.rank + card.suit.icon}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

class DealButton extends React.Component {
  
  constructor(props) {
    super();
    this.state = { hands: null }
    this.deal = this.deal.bind(this);
  }

  render() {
    return (<div><button type='button' onClick={this.deal}>Deal</button><Hands hands={this.state.hands}/></div>)
  }

  deal() {
    $("li.card").hide();
    $.getJSON('/hands/new.json', (response) => {
      this.setState( {hands: response} );
      $("li.card").each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
      });
      console.log(response);
    });
  }

}