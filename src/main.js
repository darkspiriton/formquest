import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import Vuex from 'vuex'
import swal from 'sweetalert'

window.swal = swal

var firebaseConfig = {
  apiKey: 'AIzaSyCbk-gvIkfbWqAx2huhs_2keyUERdXQHuA',
  authDomain: 'form-666.firebaseapp.com',
  databaseURL: 'https://form-666.firebaseio.com',
  projectId: 'form-666',
  storageBucket: 'form-666.appspot.com',
  messagingSenderId: '240865752171',
  appId: '1:240865752171:web:36785cedfcfd17eea92d2e',
  measurementId: 'G-RJ13HXEBR9'
}
firebase.initializeApp(firebaseConfig)

// firebase.analytics()
window.database = firebase.database()

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    isLogged: false,
    isAdmin: false,
    user: null,
    result: null
  },
  getters: {
    GET_USER_LOGGED: state => state.isLogged,
    GET_USER: state => state.user,
    GET_USER_RESULT: state => state.result,
    GET_USER_ADMIN: state => state.isAdmin
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_LOGIN_USER (state) {
      state.isLogged = true
    },
    SET_LOGOUT_USER (state) {
      state.isLogged = false
    },
    SET_USER_DATA (state, user) {
      state.user = user
    },
    SET_SUPER_ADMIN (state, status) {
      state.isAdmin = status
    },
    SET_RESULT_USER (state, result) {
      state.result = result
    }
  },
  actions: {
    async SAVE_USER ({ commit }, user) {
      try {
        var id = firebase.database().ref().child('users').push().key
        window.database.ref(`users/${id}`).set({
          user: user.user.toLowerCase(),
          name: user.name,
          age: user.age,
          grade: user.grade,
          gender: user.gender,
          origen: user.origen,
          pass: user.pass
        })
      } catch (e) {
        console.log(e)
      }
    },
    async SAVE_RESULT ({ commit }, result) {
      try {
        var id = firebase.database().ref().child('results').push().key
        window.database.ref(`results/${id}`).set({
          user: result.user,
          name: result.name,
          age: result.age,
          grade: result.grade,
          gender: result.gender,
          origen: result.origen,
          finalA: result.finalA,
          finalB: result.finalB,
          notaA: result.notaA,
          notaB: result.notaB
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.isLogged) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
