import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    //modifier le state
    this.setState(
      prevState => ({ count: prevState.count + 1 })
    )
  }

  decrement() {
    //modifier le state
    if (this.state.count > 0) {
      this.setState(
        prevState => ({ count: prevState.count - 1 })
      )
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment} >+</button>
      </div>
    );
  }
}

export default App;
