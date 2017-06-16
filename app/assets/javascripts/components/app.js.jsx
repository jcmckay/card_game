class App extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (<DealButton />)
  }

}

ReactDOM.render(
  <App />, document.getElementById('root')
)