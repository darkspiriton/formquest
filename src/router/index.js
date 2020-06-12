import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Form from '../views/Form.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
