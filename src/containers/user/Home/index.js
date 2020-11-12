import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="companyList">
          <Link to={'/company/A'}>点击进入A公司商品页</Link>
          <Link to={'/company/B'}>点击进入B公司商品页</Link>
          <Link to={'/company/C'}>点击进入C公司商品页</Link>
        </div>
      </div>
    );
  }
}

export default Home;