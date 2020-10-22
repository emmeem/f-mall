import React, { Component } from 'react';
import { Button,Input } from 'antd';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
          name:'test',
          password:'123456'
        }
      }

    login(){
        var name = this.state.name;
        var password = this.state.password;
        const postData ={
          name:name,
          password:password
        };
        console.log(postData);
        fetch('http://localhost:8080/user/login',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(postData)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })
    };

    handleUserNameChange=(event)=>{
        this.setState({
            name: event.target.value
        });
      }
      handlePassWordChange(event){
        this.setState({
            password: event.target.value
        });
      }
  

  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <table >
          <tr>
          <td>用户名:</td>
          <td><Input placeholder="请输入用户名" style={{width:200}} onChange={this.handleUserNameChange}/></td>
          </tr>
          <tr>
          <td>密码:</td>
          <td><Input.Password placeholder="请输入密码" style={{width:200}} onChange={this.handlePassWordChange.bind(this)}/></td>
          </tr>
        </table>
          <Button type="primary" style={{marginTop:10,width:300}} onClick={()=>(this.login())}>登录</Button>
      </div>
    );
  }
}

export default LoginContainer;