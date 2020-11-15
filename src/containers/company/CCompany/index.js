import React, { Component } from 'react';
import { getCompanyProductList, setUserCoupon, addProductToCart } from "../../../redux/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { message, Modal, Button } from 'antd';
import './index.css'

class CCompany extends Component {
  state = { visible: false };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCompanyProductList('http://localhost:8080/product/C'));
    this.setState({
      visible: true,
    });
  }

  handleSubmit = () => {
    this.setState({
      visible: false,
    });
    const { dispatch, user } = this.props;
    dispatch(setUserCoupon({ couponId: 3, userId: user.id}));
    
    message.info("恭喜您，获得一张优惠券")
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  addProduct = (productId) => {
    const { dispatch, user } = this.props;
    console.log(user)
    if(user) {
      dispatch(addProductToCart({productId: productId, userId: user.id, count:1}));
    } else {
      message.info("请您先登录，再添加商品")
    }
  }

  getProduct = () => {
    const { data } = this.props;
    if(data !== undefined) {
      return (data.length > 0 ?
      data.map(m => {
        return <div className="product">
          <img id="avator" alt="productImg" src={m.pictures[0].url }/><br />
          <label>{m.name}</label><br />
          <label>价格:{m.price}</label><br />
          <button className="btn-detail">查看详情</button>
          <button className="btn-cart" onClick={()=>this.addProduct(m.id)}>添加到购物车</button>
        </div>
      })
      : (
        <div>暂无商品</div>
      )
      )
    }
  }

  couponModal = (user) => {
    if (user !== undefined) {
      return (
        <Modal
          title="恭喜您，获得奖励"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              返回
            </Button>,
            <Button key="confirm" onClick={this.handleSubmit}>
              确认领取
            </Button>
          ]}
        >
          <p>优惠劵金额为: 15</p><br />
        </Modal>
      )
    }
  }

  render() {
    const {user} = this.props;
    return (
      <div className="Company">
        <h1>Company C</h1>
        <div className="product-list">
          {this.getProduct()}
        </div>
        <div className="coupon">
            {this.couponModal(user)}
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
  const { user } = state.auth;
  return {
    data,
    user,
  };
}

export default connect(mapStateToProps)(CCompany);