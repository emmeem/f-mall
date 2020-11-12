import { combineReducers } from 'redux';

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SUCCESS, ERROR, CLEAR,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CHANGE_MENU_KEY,
  GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE,
  GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE
} from "../action-type";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

function auth(state = initialState, action) {
  
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}

function registration(state = {}, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
      }
    case REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      }
    case REGISTER_FAILURE:
      return {
      }
    default:
      return state
  }
}

function alertReducer(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        type: action.type,
        message: action.message,
        show: action.show
      };
    case ERROR:
      return {
        type: action.type,
        message: action.message,
        show: action.show
      };
    case CLEAR:
      return {};
    default:
      return state
  }
}

function menu(state = {}, action) {
  switch (action.type) {
    case CHANGE_MENU_KEY:
      return {
        current: action.key
      }
    default:
      return state
  }
}

function getProductList(state ={}, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        data: [],
        loading: true
      }
    case GET_PRODUCT_SUCCESS:
      return {
        data: action.data,
        loading: false,
      }
    case GET_PRODUCT_FAILURE:
      return {
        data: [],
      }
    default:
      return state
  }
}

function getCartInfo(state ={}, action) {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        data: [],
        loading: true
      }
    case GET_CART_SUCCESS:
      return {
        data: action.data,
        loading: false,
      }
    case GET_CART_FAILURE:
      return {
        data: [],
      }
    default:
      return state
  }
}

export const reducer = combineReducers({
  auth,
  registration,
  alertReducer,
  menu,
  getProductList,
  getCartInfo
});