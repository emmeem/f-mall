import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {history} from './redux/unity'
import {Router, Route, Switch } from 'react-router-dom';
import Menus from './components/menus'
import ROUTES from './config/routes'

class App extends Component {
  render() {
    return (
      <Router history= {history}>
        <Menus />
        <Switch>
          <Route exact path='/' component={ROUTES[0].component} />
          <Route exact path='/product' component={ROUTES[1].component} />
          <Route exact path='/cart' component={ROUTES[2].component} />
          <Route exact path='/user/login' component={ROUTES[3].component} />
          <Route exact path='/user/register' component={ROUTES[4].component} />
          <Route exact path='/company/A' component={ROUTES[5].component} />
          <Route exact path='/company/B' component={ROUTES[6].component} />
          <Route exact path='/company/C' component={ROUTES[7].component} />
          <Route exact path='/coupon' component={ROUTES[8].component} />
        </Switch>
      </Router>
    );
  }
}

export default App;
