import React, { Component } from 'react';
import './App.css';
import './style.css';
import StreetView from './components/StreetView';
import Guess from './components/Guess';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <h1>Hello, HackRU!</h1>
        <div className="container">
          <div className="row">
            <StreetView/>
            <Guess/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
