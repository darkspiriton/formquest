import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
import Video from '../views/Video.vue'
import Form from '../views/Form.vue'
import FormTest from '../views/FormTest.vue'
import Consent from '../views/Consent.vue'
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
    path: '/video',
    name: 'Video',
    component: Video,
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
    path: '/consent',
    name: 'Form',
    component: Consent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/formTest',
    name: 'Form',
    component: FormTest,
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
