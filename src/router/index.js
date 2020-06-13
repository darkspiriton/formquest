import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
import Dashboard from '../views/Dashboard.vue'
import Form from '../views/Form.vue'
import Result from '../views/Result.vue'
import List from '../views/List.vue'

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
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      requiresAuth: true,
      requireSuperAdmin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
