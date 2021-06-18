import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DailyPrice from "../views/DailyPrice"
import MyOrderDetail from "../views/MyOrderDetail"
import DeliveryInfo from '../views/DeliveryInfo'
import OrderDetail from '../views/orderDetail'

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
    path:"/orderDetail",
    name:"OrderDetail",
    component: OrderDetail,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
