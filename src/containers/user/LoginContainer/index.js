import React, { Component } from 'react';
import { Button, Input } from 'antd';
import {Redirect} from 'react-router-dom'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      password: '123456',
      loginStatus: false
    }
  }

  login() {
    const postData = {
      name: this.state.name,
      password: this.state.password
    };
    fetch('http://localhost:8080/user/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
    .then((Response) => {
      if (Response.status === 200) {
        return Response.json();
      } else {
        Promise.reject();
      }
    }).then(data => {
        console.log(data);
        this.setState({
          loginStatus: true
        });
      });
  }

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

  render() {
    if(this.state.loginStatus) {
      return <Redirect to= '/' />
    }
    
    return (
      <div>
        <h1>用户登录页面</h1>
        <table align="center" valign="center">
          <tr>
            <td>用户名:</td>
            <td><Input placeholder="请输入用户名" style={{ width: 200 }} onChange={this.handleUserNameChange} /></td>
          </tr>
          <tr>
            <td>密码:</td>
            <td><Input.Password placeholder="请输入密码" style={{ width: 200 }} onChange={this.handlePassWordChange} /></td>
          </tr>
        </table>
        <Button type="primary" style={{ marginTop: 10, width: 300 }} onClick={() => (this.login())}>登录</Button>
      </div>
    );
  }
  
}

export default LoginContainer;