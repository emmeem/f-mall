import Home from '../containers/user/Home'
import Product from '../containers/user/Product'
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
    key: 'product',
    link: '/product',
    text: '商品',
    component: Product
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
