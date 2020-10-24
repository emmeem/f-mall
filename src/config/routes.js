import Home from '../containers/user/Home'
import Goods from '../containers/user/Goods'
import Cart from '../containers/user/Cart'
import Login from '../containers/user/Login'
import Register from '../containers/user/Register'

const ROUTES = [
  {
    key: 'home',
    link: '/',
    text: '首页',
    component: Home
  }, {
    key: 'goods',
    link: '/goods',
    text: '商品',
    component: Goods
  }, {
    key: 'cart',
    link: '/cart',
    text: '购物车',
    component: Cart
  }, {
    key: 'login',
    link: '/user/login',
    text: '登陆',
    component: Login
  }, {
    key: 'register',
    link: '/user/register',
    text: '注册',
    component: Register
  }
];

export default ROUTES;
