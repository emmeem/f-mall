import { combineReducers } from 'redux';

import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SUCCESS, ERROR, CLEAR,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, CHANGE_MENU_KEY
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


export const reducer = combineReducers({
  auth,
  registration,
  alertReducer,
  menu
});