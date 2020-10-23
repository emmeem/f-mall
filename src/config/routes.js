import HomeContainer from '../Containers/HomeContainer'
import GoodsContainer from '../Containers/GoodsContainer'
import CartContainer from '../Containers/CartContainer'
import LoginContainer from '../Containers/LoginContainer'
import RegisterContainer from '../Containers/RegisterContainer'

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
      link: '/login',
      text: '登陆',
      component: LoginContainer
  }, {
      key: 'register',
      link: '/register',
      text: '注册',
      component: RegisterContainer
  }
];

export default ROUTES ;
