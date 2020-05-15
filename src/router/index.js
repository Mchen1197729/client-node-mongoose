import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo01',
    component: () => import(/*webpackChunkName:'demo01'*/'../views/ItemDemo01')
  }
]

const router = new VueRouter({
  routes
})

export default router
