import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
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
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
