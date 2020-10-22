import React, { Component } from 'react';
import './App.css';
import LoginContainer from './User/LoginContainer'

class App extends Component {
  render() {
    return (
        <div data-testid="app" className="App">
           <LoginContainer />
        </div>
    );
  }
}

export default App;
