import React, { Component } from 'react';
import { getCompanyProductList } from "../../../redux/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'

class ACompany extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCompanyProductList('http://localhost:8080/product/A'));
  }

  getProduct = () => {
    const { data } = this.props;
    if(data !== undefined) {
      return (data.length > 0 ?
      data.map(m => {
        return <div className="product">
          <img id="avator" alt="productImg" src={m.pictures[0].url}/><br />
          <label>{m.name}</label><br />
          <label>价格:{m.price}</label><br />
          <button className="btn-detail">查看详情</button>
          <button className="btn-cart">添加到购物车</button>
        </div>
      })
      : (
        <div>暂无商品</div>
      )
      )
    }
  }

  render() {
    return (
      <div className="Company">
        <h1>Company A</h1>
        <div className="product-list">
          {this.getProduct()}
        </div>
        <footer className="backToHome">
          <Link to={'/'}>回到主页</Link>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.getProductList;
  return {
    data,
  };
}

export default connect(mapStateToProps)(ACompany);