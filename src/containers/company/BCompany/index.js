import React, { Component } from 'react';
import { getCompanyProductList, getMissionInfo, setUserCoupon, addProductToCart } from "../../../redux/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { message, Modal, Button } from 'antd';
import './index.css'

class BCompany extends Component {
  state = { visible: false };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCompanyProductList('http://localhost:8080/product/B'));
    dispatch(getMissionInfo('http://localhost:8080/mission/1'));
  }

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
    if (data !== undefined) {
      return (data.length > 0 ?
        data.map(m => {
          return <div className="product">
            <img id="avator" alt="productImg" src={m.pictures[0].url} /><br />
            <label>{m.name}</label><br />
            <label>价格:{m.price}</label><br />
            <Button key="look" className="btn-detail">查看详情</Button>
            <Button key="add-to-cart" className="btn-cart" onClick={()=>this.addProduct(m.id)}>添加到购物车</Button>
          </div>
        })
        : (
          <div>暂无商品</div>
        )
      )
    }
  }

  handleSubmit = () => {
    this.setState({
      visible: false,
    });
    const { dispatch, user } = this.props;
    dispatch(setUserCoupon({ couponId: 2, userId: user.id}));
    message.info("恭喜您，获得一张优惠券，可用于兑换高级功能")
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    message.info("很遗憾，您的回答错误，无法获取优惠券", 2)
  };

  joinMission = () => {
    const { mission, user } = this.props;
    console.log(user)
    if(user) {
      if (mission.id) {
        this.setState({
          visible: true,
        });
      } else {
        message.info("该活动尚未开始", 2)
      }
    }else {
      message.info("请登录，再参加活动", 2)
    }
    
  };

  missionModal = (mission) => {
    if (mission !== undefined) {
      return (
        <Modal
          title="完成任务有奖励"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              返回
            </Button>
          ]}
        >
          <p>问题:{mission.content}</p><br />
          <p>解释:{mission.explanation}</p><br />
          <p>提示:{mission.tips}</p><br />
          <div>
            <p>请选择答案：</p>
            <Button key="answer1" onClick={this.handleCancel}>
              取消订单
            </Button>
            <Button key="answer2" onClick={this.handleSubmit}>
              立即支付
            </Button>
          </div>
        </Modal>
      )
    }
  }

  render() {
    const { mission } = this.props;
    return (
      <div className="Company">
        <h1>Company B</h1>
        <div className="product-list">
          {this.getProduct()}
        </div>
        <div className="mission">
          <button onClick={this.joinMission}>参加活动</button>
          {this.missionModal(mission)}
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
  const { data } = state.getProductList;
  const { mission } = state.getMissionInfo;
  return {
    data,
    mission,
    user,
  };
}

export default connect(mapStateToProps)(BCompany);