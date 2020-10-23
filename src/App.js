import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menus from './Components/Menus'
import ROUTES from './config/routes'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Menus />
          <Switch>
            <Route exact path='/' component={ROUTES[0].component} />
            <Route exact path='/goods' component={ROUTES[1].component} />
            <Route exact path='/cart' component={ROUTES[2].component} />
            <Route exact path='/login' component={ROUTES[3].component} />
            <Route exact path='/register' component={ROUTES[4].component} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
