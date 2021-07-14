import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DailyPrice from "../views/DailyPrice"
import MyOrderDetail from "../views/MyOrderDetail"
import DeliveryInfo from '../views/DeliveryInfo'
import OrderDetail from '../views/orderDetail'
import WorkHistory from '../views/workHistory'
import DateSelect from '../views/order/dateSelect'
import TimeSelect from '../views/order/timeSelect'
import Product from '../views/order/product'
import Basket from '../views/order/basket'
import UserMessage from '../views/order/userMessage'
import MyOrder from '../views/myOrder'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path:"/myOrder",
    name:"myOrder",
    component: MyOrder,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
