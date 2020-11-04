import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="companyList">
          <Link to={'/company/A'}>A公司</Link>
          <Link to={'/company/B'}>B公司</Link>
          <Link to={'/company/C'}>C公司</Link>
        </div>
      </div>
    );
  }
}

export default Home;