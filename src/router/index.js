import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import path from '../components/index.module/indexRouter'
import registerRouter from '@/util/registerRouter'
console.log(111,registerRouter)
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
 ...registerRouter
]

console.log(routes)
const router = new VueRouter({
  routes
})

export default router
