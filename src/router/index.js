import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from "../components/menu.vue";
import Order from "../components/Order.vue";
import About from "../components/About.vue";
import MenuSpecials from "../components/MenuSpecials.vue";
import MenuMainCourse from "../components/MenuMainCourse.vue";
import MenuCakeDesserts from "../components/MenuCakeDesserts.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/menu/specials'
  },
  {
    path: '/menu',
    component: Menu,
    children: [
      {
        path: 'specials',
        name: 'menu.specials',
        component: MenuSpecials
      },
      {
        path: 'mainCourse',
        name: 'menu.mainCourse',
        component: MenuMainCourse
      },
      {
        path: 'cakeDesserts',
        name: 'menu.cakeDesserts',
        component: MenuCakeDesserts
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
