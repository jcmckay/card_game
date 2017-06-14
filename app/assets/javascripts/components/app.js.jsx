function Hands (props) {
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

class App extends React.Component {

  constructor(props) {
    super();
    this.state = { hands: null }
  }

  componentDidMount() {
    $.getJSON('/hands/new.json', (response) => {
      this.setState( {hands: response} );
      console.log(response);
    });
  }

  render() {
    return (<div>{!this.state.hands ? <p>Dealing...</p> : <Hands hands={this.state.hands}/> }</div>)
  }

}

ReactDOM.render(
  <App />, document.getElementById('root')
)