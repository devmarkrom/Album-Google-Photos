import React, { Component } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import Albums from './containers/Albums';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppNav /> 
          <Albums />     
      </div>
    );
  }
}

export default App;
