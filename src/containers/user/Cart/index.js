import React, { Component } from 'react';
import { getCartInfo } from "../../../redux/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cart extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCartInfo('http://localhost:8080/cart/1'));
  }


  getCartList = () => {
    const { data } = this.props;
    console.log(data);
    if(data !== undefined) {
      return (data.length > 0 ?
        data.map(m => {
          return <div className="cart">
            <img id="avator" alt="productImg" src={m.product.pictures[0].url}/><br />
            <label>{m.product.name}</label><br />
            <label>价格:{m.product.price}</label><br />
            <label>数量:{m.count}</label><br />
          </div>
        })
        : (
          <div>暂无购物车信息</div>
        )
      )
   }
  }


  render() {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <div className="cart-list">
          {this.getCartList()}
        </div>
        <footer className="backToHome">
          <Link to={'/'}>回到主页</Link>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.getCartInfo;
  return {
    data,
  };
}

export default connect(mapStateToProps)(Cart);