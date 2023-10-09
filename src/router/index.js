import Vue from "vue";
import VueRouter from "vue-router";
import landing from "../views/landing.vue";
import detailView from '../views/detailView.vue'
import addfeedback from "../views/AddFeedback.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: landing,
    meta:{ onlyGuest:true}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detailView
    
  },
  {
    path: "/add-feedback",
    name: "addfeedback",
    component: addfeedback,
    meta:{ requiresAuth:true}
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/register.vue"),
    meta:{ onlyGuest:true}
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/login.vue"),
    meta:{ onlyGuest:true}
  },
];



const router = new VueRouter({
  routes,
  mode: "history",
  async scrollBehavior() {
    return { x: 0, y: 0 }
  },
});

export default router;
