import Vue from 'vue'
import Vuelidate from 'vuelidate'
import store from './store/index'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(Vuelidate)
Vue.use(VueRouter)


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
  
})

