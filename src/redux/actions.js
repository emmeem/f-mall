import * as types from './action-type'
import { history } from './unity'

function alertError(message) {
  return {
    type: types.ERROR,
    message: message,
    show: true
  }
}

function alertInfo(message) {
  return {
    type: types.SUCCESS,
    message: message,
    show: true
  }
}

export function login(user, redirect) {
  return dispatch => {
    dispatch(request(user));
    fetch('http://localhost:8080/user/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => {
      dispatch(success(res));
      dispatch(alertInfo("登录成功"))
      localStorage.setItem("user", JSON.stringify(res));
      if (redirect === undefined) {
        redirect = "/"
        history.push(redirect)
      }
      history.push(redirect)
    })
      .catch(e => {
        dispatch(alertError(e));
        dispatch(failure(e));
      });

    function request(user) { return { type: types.LOGIN_REQUEST, user } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
  }
}

export function register(value) {
  return dispatch => {
    dispatch(request())
    fetch('http://localhost:8080/user/register', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(value)
    }).then(res => {
      dispatch(success(res));
      dispatch(alertInfo("注册成功"))
      localStorage.setItem("user", JSON.stringify(res));
      setTimeout(() => {
        history.push("/")
      }, 3000)
    }).catch(e => {
      dispatch(alertError(e));
      dispatch(failure(e));
    });
  }
  function request() { return { type: types.REGISTER_REQUEST, fetching: true } }
  function success(user) { return { type: types.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: types.REGISTER_FAILURE, error } }
}
