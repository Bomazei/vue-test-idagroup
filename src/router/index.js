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
        redirect: '/pay'
      }
]

const router = new VueRouter({
  routes
})

export default router
