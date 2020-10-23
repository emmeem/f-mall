import React, { Component } from 'react';
import './App.css';
import LoginContainer from './User/LoginContainer'
import RegisterContainer from './User/RegisterContainer'

class App extends Component {
  render() {
    return (
        <div data-testid="app" className="App">
           <RegisterContainer />
        </div>
    );
  }
}

export default App;
