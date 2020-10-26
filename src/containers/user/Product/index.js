import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductList } from "../../../redux/actions";
import { connect } from 'react-redux';
import './index.css'

class Product extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductList());
  }

  getProduct = () => {
    const { data } = this.props;
    console.log(data);
    if(data !== undefined) {
      return (data.length > 0 ?
      data.map(m => {
        return <div className="product">
          <img id="avator" src={m.pictures[0].url}/><br />
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
      <div className="Products">
        <h1>所有商品</h1>
        <div className="product-list">
          {this.getProduct()}
        </div>
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

export default connect(mapStateToProps)(Product);