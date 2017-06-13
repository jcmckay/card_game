function Hand (props) {
  return(
    <ul className='hand'>
      {props.hand.cards.map((card, index) => 
        <li key={index} className='card'>{card.rank + card.suit}</li>
      )}
    </ul>
  )
}

class App extends React.Component {

  constructor(props) {
    super();
    this.state = { hand: null }
  }

  componentDidMount() {
    $.getJSON('/home/index.json', (response) => {
      this.setState( {hand: response[0]} );
      console.log(this.state.hand)
    });
  }

  render() {
    return (<div>{!this.state.hand ? <p>Dealing...</p> : <Hand hand={this.state.hand}/> }</div>)
  }

}

ReactDOM.render(
  <App />, document.getElementById('root')
)