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
    }).then(handleResponse)
    .catch(e => {
      dispatch(alertError(e));
      dispatch(failure(e));
    }).then(res => {
      dispatch(success(res));
      dispatch(alertInfo("登录成功"))
      localStorage.setItem("user", JSON.stringify(res));
      if (redirect === undefined) {
        redirect = "/"
        history.push(redirect)
      }
      history.push(redirect)
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

export function changeMenuKey(key) {
  return dispatch => {
    dispatch(handlClick(key))
  }

  function handlClick(key) {return {type: types.CHANGE_MENU_KEY, key}}
}

export function getProductList() {
  return dispatch => {
    dispatch(productListGetFetching())
    fetch('http://localhost:8080/product', {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse)
    .then(res => {
      dispatch(productListGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
    });
  }

  function productListGetFetching() { return { type: types.GET_PRODUCT_REQUEST} }
  function productListGetSuccess(data) { return { type: types.GET_PRODUCT_SUCCESS, data} }
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}