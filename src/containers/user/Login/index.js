import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { login } from "../../../redux/actions"
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: '/',
    }
    this.onFinish = this.onFinish.bind(this);
  }

  formRef = React.createRef();

  onFinish = values => {
    const { dispatch } = this.props;
    dispatch(login({ name: values.name, password: values.password }), this.state.redirect)
  };

  render() {
    return (
      <div>
        <h1 >用户登录页面</h1>
        <Form onFinish={this.onFinish} ref={this.formRef} name="Login" style={{
          position: 'absolute', left: '50%', top: '25%',
          transform: 'translate(-50%, -50%)'
        }} className="login-form">
          <Form.Item name={"name"} rules={[{ required: true, message: '请输入用户名' }]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item name={"password"} rules={[{ required: true, message: '请输入密码' }]}>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggingIn } = state.auth;
  return {
    isLoggingIn,
  };
}

export default connect(mapStateToProps)(Login)
