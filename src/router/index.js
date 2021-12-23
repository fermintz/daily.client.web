import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DailyPrice from "../views/DailyPrice"
import MyOrderDetail from "../views/MyOrderDetail"
import DeliveryInfo from '../views/DeliveryInfo'
import OrderDetail from '../views/order/orderDetail'
import WorkHistory from '../views/workHistory'
import DateSelect from '../views/order/dateSelect'
import TimeSelect from '../views/order/timeSelect'
import Product from '../views/order/product'
import Basket from '../views/order/basket'
import UserMessage from '../views/order/userMessage'
import MyOrder from '../views/myOrder'
import Mypage from '../views/mypage'
import MyCouponList from '../views/myCouponList'
import Main from '@/components/layout/main'
import Sub from '@/components/layout/sub'
import Wallet from '../views/mypage/wallet'
import CardAdd from '../views/mypage/cardAdd'
import MyAddress from '../views/mypage/myAddress'
import MyInfo from '../views/mypage/myInfo'
import Phone from '../views/first/phone'
import Gate from '../views/first/gate'
import OrderFinish from '../views/order/orderFinish'
import Login from '../views/login'
import ShopSearch from '../views/order/shop_search'
import TermsView from '../views/order/terms_view'
import AddDetail from '../views/add_detail'
import Terms from '../views/Terms'

import PayFaild from '../views/payFaild'
import PayLoading from '../views/payLoading'
import Splash from '../views/splash'
import LoginLoading from '../views/login_loading'
import EventView from '../views/eventView'

import AddressSearch from '../views/address/search'
import GateInput from '../views/address/gate'
import NotGate from '../views/address/notGate'


Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component: Main,
    children:[
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path:"/myOrder",
        name:"myOrder",
        component: MyOrder,
      },
      {
        path:"/mypage",
        name:"mypage",
        component: Mypage,
      },
      
    ],
  },
  {
    path:"/splash",
    name:"splash",
    component: Splash,
  },
  {
    path:"/login",
    name:"login",
    component: Login,
  },
  {
    path:"/loginLoading",
    name:"loginLoading",
    component: LoginLoading,
  },
  {
    path:"/shopSearch",
    name:"shopSearch",
    component: ShopSearch
  },

  {
    path:"/sub",
    component: Sub,
    children:[
      {
        path:"/wallet",
        name:"wallet",
        component: Wallet,
      },
      {
        path:"/cardAdd",
        name:"cardAdd",
        component: CardAdd,
      },
      {
        path:"/myAddress",
        name:"myAddress",
        component: MyAddress,
      },
      {
        path:"/myInfo",
        name:"myInfo",
        component: MyInfo,
      },
      {
        path:"/phone",
        name:"phone",
        component: Phone,
      },
      {
        path:"/gate",
        name:"gate",
        component: Gate,
      },
      {
        path:"/dailyPrice",
        name:"DailyPrice",
        component: DailyPrice,
      },
      {
        path:"/myOrderDetail",
        name:"MyOrderDetail",
        component: MyOrderDetail,
      },
      {
        path:"/delivery-info",
        name:"DeliveryInfo",
        component: DeliveryInfo,
      },
      {
        path:"/dateSelect",
        name:"dateSelect",
        component: DateSelect,
      },
      {
        path:"/timeSelect",
        name:"timeSelect",
        component: TimeSelect,
      },
      {
        path:"/product",
        name:"product",
        component: Product,
      },
      
      {
        path:"/orderDetail",
        name:"OrderDetail",
        component: OrderDetail,
      },
      {
        path:"/workHistory",
        name:"workHistory",
        component: WorkHistory,
      },
      {
        path:"/basket",
        name:"basket",
        component: Basket,
      },
      {
        path:"/userMessage",
        name:"userMessage",
        component: UserMessage,
      },
      
      {
        path:"/myCouponList",
        name:"myCouponList",
        component: MyCouponList,
      },
      {
        path:"/termsView",
        name:"termsView",
        component: TermsView
      },
      {
        path:"/addDetail",
        name:"addDetail",
        component: AddDetail
      },
      {
        path:"/terms",
        name:"terms",
        component: Terms
      },
      
      {
        path:"/eventView",
        name:"eventView",
        component: EventView
      },
      {
        path:"/addressSearch",
        name:"addressSearch",
        component: AddressSearch
      }, 
      {
        path:"/gateInput",
        name:"gateInput",
        component: GateInput
      },
      {
        path:"/notGate",
        name:"notGate",
        component: NotGate
      },
      
      
    ],
  },
  {
    path:"/orderFinish",
    name:"orderFinish",
    component: OrderFinish,
  },
  {
    path:"/payFaild",
    name:"payFaild",
    component: PayFaild
  },
  {
    path:"/payLoading",
    name:"payLoading",
    component: PayLoading
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
