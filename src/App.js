import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    console.log('increment')
    //modifier le state
    this.setState(
      prevState => {
        count: prevState.count + 1
      }
    )
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button>-</button>
        <button onClick={this.increment} >+</button>
      </div>
    );
  }
}

export default App;
