import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">reddit</h1>
          <h2 className="App-blurb">The front page of the web</h2>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
