import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { register } from "../../../redux/actions"
import { connect } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Register extends Component {
  constructor(props) {
    super(props);
    
    this.onFinish = this.onFinish.bind(this);
  }

  formRef = React.createRef();

  onFinish = values => {
    const { dispatch } = this.props;
    dispatch(register({ name: values.name, password: values.password, 
      phone: values.phone, address: values.address }))
  };

  render() {
    return (
      <div>
        <h1>用户注册页面</h1>
        <Form onFinish={this.onFinish} ref={this.formRef} name="Register" style={{
          position: 'absolute', left: '50%', top: '30%',
          transform: 'translate(-50%, -50%)'
        }} className="register-form">
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
          <Form.Item name={"phone"} rules={[{ required: true, message: '请输入手机号' }]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="手机号码"
            />
          </Form.Item>
          <Form.Item name={"address"} rules={[{ required: true, message: '请输入地址' }]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="地址"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button" >
              注册
            </Button>
          </Form.Item>
        </Form>
        </div>
    );
  }
}

export default connect()(Register);