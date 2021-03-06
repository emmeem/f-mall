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

export function getCompanyProductList(url) {
  return dispatch => {
    dispatch(companyProductListGetFetching())
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse)
    .then(res => {
      dispatch(companyProductListGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
    });
  }

  function companyProductListGetFetching() { return { type: types.GET_PRODUCT_REQUEST} }
  function companyProductListGetSuccess(data) { return { type: types.GET_PRODUCT_SUCCESS, data} }
}

export function getCartInfo(url) {
  return dispatch => {
    dispatch(userCartListGetFetching())
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse)
    .then(res => {
      dispatch(userCartListGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
        dispatch(userCartListGetFailure(e));
    });
  }

  function userCartListGetFetching() { return { type: types.GET_CART_REQUEST} }
  function userCartListGetSuccess(data) { return { type: types.GET_CART_SUCCESS, data} }
  function userCartListGetFailure(error) { return { type: types.GET_CART_FAILURE, error } }
}

export function addProductToCart(userCartInfo) {
  return dispatch => {
    dispatch(userCartSetFetching())
    fetch('http://localhost:8080/cart', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userCartInfo)
    }).then(handleResponse)
    .then(res => {
      dispatch(userCartSetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
        dispatch(userCartSetFailure(e));
    });
  }

  function userCartSetFetching() { return { type: types.SET_CART_REQUEST} }
  function userCartSetSuccess(data) { return { type: types.SET_CART_SUCCESS, data} }
  function userCartSetFailure(error) { return { type: types.SET_CART_FAILURE, error } }
}

export function getMissionInfo(url) {
  return dispatch => {
    dispatch(missionInfoGetFetching())
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse)
    .then(res => {
      dispatch(missionInfoGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
        dispatch(missionInfoGetFailure(e));
    });
  }

  function missionInfoGetFetching() { return { type: types.GET_MISSION_REQUEST} }
  function missionInfoGetSuccess(data) { return { type: types.GET_MISSION_SUCCESS, data} }
  function missionInfoGetFailure(error) { return { type: types.GET_MISSION_FAILURE, error } }
}

export function setUserCoupon(info) {
  return dispatch => {
    dispatch(setUserCouponGetFetching())
    fetch('http://localhost:8080/coupon/userCoupon', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(handleResponse)
    .then(res => {
      dispatch(setUserCouponGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
        dispatch(setUserCouponGetFailure(e));
    });
  }

  function setUserCouponGetFetching() { return { type: types.SET_USERCOUPON_REQUEST} }
  function setUserCouponGetSuccess(data) { return { type: types.SET_USERCOUPON_SUCCESS, data} }
  function setUserCouponGetFailure(error) { return { type: types.SET_USERCOUPON_FAILURE, error } }

}

export function getUserCoupon(url) {
  return dispatch => {
    dispatch(getUserCouponGetFetching())
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(handleResponse)
    .then(res => {
      dispatch(getUserCouponGetSuccess(res))
    }).catch(e => {
        dispatch(alertError(e));
        dispatch(getUserCouponGetFailure(e));
    });
  }

  function getUserCouponGetFetching() { return { type: types.GET_USERCOUPON_REQUEST} }
  function getUserCouponGetSuccess(data) { return { type: types.GET_USERCOUPON_SUCCESS, data} }
  function getUserCouponGetFailure(error) { return { type: types.GET_USERCOUPON_FAILURE, error } }

}