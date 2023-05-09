import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstVue from '../views/First.vue'
import SecondVue from '../views/Second.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstVue',
    component: FirstVue
  },
  {
    path: '/Second',
    name: 'SecondVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SecondVue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
