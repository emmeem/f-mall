import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCoupon } from "../../../redux/actions";
import { Link } from 'react-router-dom';
import './index.css'

class userCoupon extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(getUserCoupon('http://localhost:8080/coupon/'+ user.id));
    
  }

  getCouponList = () => {
    const { couponList } = this.props;
    if(couponList !== undefined) {
      return (couponList.length > 0 ?
        couponList.map(m => {
          return (
            <div className="coupon">
              <label>名称:{m.coupon.name}</label><br />
              <label>金额:{m.coupon.amount}</label><br />
              <label>消费店铺:{m.coupon.companyName}公司</label><br />
            </div>
          )
        })
        : (
          <div>暂无优惠券信息</div>
        )
      )
   }
  }


  render() {
    return (
      <div className="userCoupon">
        <h1>优惠劵详情</h1>
        <div className="couponList">
          {this.getCouponList()}
        </div>
        <footer className="backToHome">
          <Link to={'/'}>回到主页</Link>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { couponList } = state.getUserCouponInfo;
  return {
    user,
    couponList,
  };
}

export default connect(mapStateToProps)(userCoupon);