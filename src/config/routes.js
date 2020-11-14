import Home from '../containers/user/Home'
import Product from '../containers/user/Product'
import Cart from '../containers/user/Cart'
import Login from '../containers/user/Login'
import Register from '../containers/user/Register'
import ACompany from '../containers/company/ACompany'
import BCompany from '../containers/company/BCompany'
import CCompany from '../containers/company/CCompany'
import userCoupon from '../containers/coupon/userCoupon'

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
  },{
    link: '/Company/A',
    text: 'A公司',
    component: ACompany
  },{
    link: '/Company/B',
    text: 'B公司',
    component: BCompany
  },{
    link: '/Company/C',
    text: 'C公司',
    component: CCompany
  },{
    link: '/coupon',
    text: '查看优惠券',
    component: userCoupon
  }
];

export default ROUTES;
