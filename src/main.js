import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
