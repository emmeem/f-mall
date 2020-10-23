import HomeContainer from '../containers/user/HomeContainer'
import GoodsContainer from '../containers/user/GoodsContainer'
import CartContainer from '../containers/user/CartContainer'
import LoginContainer from '../containers/user/LoginContainer'
import RegisterContainer from '../containers/user/RegisterContainer'

const ROUTES = [
  {
      key: 'home',
      link: '/',
      text: '首页',
      component: HomeContainer
  }, {
    key: 'goods',
    link: '/goods',
    text: '商品',
    component: GoodsContainer
}, {
  key: 'cart',
  link: '/cart',
  text: '购物车',
  component: CartContainer
}, {
      key: 'login',
      link: '/user/login',
      text: '登陆',
      component: LoginContainer
  }, {
      key: 'register',
      link: '/user/register',
      text: '注册',
      component: RegisterContainer
  }
];

export default ROUTES ;
