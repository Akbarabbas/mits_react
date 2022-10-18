import { Component, useState } from 'react'

//properties
//methods
class App1 extends Component {
  state = {
    counter:0,
  }

  increment = () => {
    this.setState(({counter}, props) => { return { counter:counter+1 }})
  }

  decrement = () => {
    this.setState(({counter}) => { return { counter : counter-1 }})
  }

  render() {
    const { name, designation } = this.props;
    const { counter } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <p style={{textDecoration:'underline'}}>{designation}</p>

        <button onClick={this.increment}>Increment</button>
        <p>{this.state.counter}</p>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
}

constructor(props) {
  super(props);
  this.props = props;
}
}

export default App1;