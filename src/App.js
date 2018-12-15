import React, { Component } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import Albums from './containers/Albums';
import Album from './containers/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppNav />
          <Album />
          <Albums />     
      </div>
    );
  }
}

export default App;
