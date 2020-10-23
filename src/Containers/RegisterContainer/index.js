import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      password: '123456',
      phone: '18117837389',
      address: '2nd street'
    }
  }

  register() {
    const postData = {
      name: this.state.name,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address
    };
    fetch('http://localhost:8080/user/register', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  };

  handleUserNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  handlePassWordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    });
  }
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>注册页面</h1>
        <table >
          <tr>
            <td>用户名:</td>
            <td><Input placeholder="请输入用户名" style={{ width: 200 }} onChange={this.handleUserNameChange} /></td>
          </tr>
          <tr>
            <td>密码:</td>
            <td><Input.Password placeholder="请输入密码" style={{ width: 200 }} onChange={this.handlePassWordChange} /></td>
          </tr>
          <tr>
            <td>手机号:</td>
            <td><Input placeholder="请输入手机号码" style={{ width: 200 }} onChange={this.handlePhoneChange} /></td>
          </tr>
          <tr>
            <td>地址:</td>
            <td><Input placeholder="请输入地址" style={{ width: 200 }} onChange={this.handleAddressChange} /></td>
          </tr>
        </table>
        <Button type="primary" style={{ marginTop: 10, width: 300 }} onClick={() => (this.register())}>注册</Button>
      </div>
    );
  }
}

export default RegisterContainer;