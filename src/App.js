import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


//functional component
const Counter = props => {
  const [counter, setCounter] = useState(0)
  return <h1>Counter: {counter} <button onClick={() => setCounter(counter+1)}>+</button></h1>
}

// component class es6
class App extends Component {
  state = {
    valor: 1
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({ valor: this.state.valor + 1})
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter/>
          <p>
            Valor: {this.state.valor}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
