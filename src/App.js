import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p>
            Valor: {this.state.valor}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
