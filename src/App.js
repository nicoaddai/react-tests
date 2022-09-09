import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { count: 0}
  }

  increment = () => {
    return this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    return this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <div className="App">
       <h2>{this.state.count}</h2>
       <button onClick={this.increment}>+</button>
       <button onClick={this.decrement}>-</button>
      </div>
    );
  }
  
}

export default App;
