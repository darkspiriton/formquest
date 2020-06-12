import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    isLogged: false,
    users: [
      {
        name: 'dev',
        age: '10',
        grade: '3ero C',
        gender: 'masculino',
        origen: 'costa',
        pass: '1234'
      }
    ],
    result: null
  },
  getters: {
    GET_USER_LOGGED: state => state.isLogged,
    GET_USER_RESULT: state => state.result
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
    SET_NEW_USER (state, user) {
      state.users.push(user)
    },
    SET_RESULT_USER (state, result) {
      state.result = result
    }
  },
  actions: {
    async LOAD_LOGOUT_USER ({ commit }) {
      // try {
      //   let data = await axios.post(urlLogOut)
      //   if (data.data.success) {
      //     commit('SET_LOGOUT_USER')
      //     window.location.replace(urlLogin)
      //   }
      // } catch (e) {
      //   window.location.replace(urlLogin)
      // }
    },
    async VALIDATE_DATA (context) {
      // let valid = await axios.get(
      //   `${urlValidateToken}?token=${context.state.token}`
      // )
      // if (!valid.data.data.validate) {
      //   context.dispatch('LOAD_LOGOUT_USER')
      // }
    }
  }
})

router.beforeEach((to, from, next) => {
  const urls = ['CreateUser', 'Login']
  const skipLogin = urls.includes(to.name)
  if (skipLogin) {
    next()
  }

  if (store.state.isLogged) {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
