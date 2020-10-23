import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ShopOutlined, HomeOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import ROUTES from '../../config/routes'

class Menus extends Component {
  state = {
    current: this.props.current,
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to={ROUTES[0].link}><b>{ROUTES[0].text}</b></Link>
        </Menu.Item>
        <Menu.Item key="goods" icon={<ShopOutlined />}>
          <Link to={ROUTES[1].link}><b>{ROUTES[1].text}</b></Link>
        </Menu.Item>
        <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to={ROUTES[2].link}><b>{ROUTES[2].text}</b></Link>
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link to={ROUTES[3].link}><b>{ROUTES[3].text}</b></Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<LoginOutlined />}>
          <Link to={ROUTES[4].link}><b>{ROUTES[4].text}</b></Link>
        </Menu.Item>
      </ Menu>

    );
  }
}

export default Menus;