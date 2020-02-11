import Vue from 'vue'
import VueRouter from 'vue-router'
import History from '../components/History'
import Pay from '../components/Pay'
import Success from '../components/Success'

Vue.use(VueRouter)

const routes = [
      {
        path: '/history', 
        component: History
      },
      {
        path: '/pay', 
        component: Pay
      },
      {
        path: '/pay-success',
        component: Success,
      },
      {
        path: '*',
        component: Pay
      }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
