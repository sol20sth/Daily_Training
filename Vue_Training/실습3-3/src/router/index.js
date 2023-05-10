import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Happeed from '@/views/Happeed'
import NotFound from '@/views/404'
import Happling from '@/views/happling'
import Happlossome from '@/views/Happlossome'
import Happlower from '@/views/Happlower'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/happeed',
    name: 'happeed',
    component: Happeed,
    // beforeEnter(to, from , next) {
    //   if (from.name !== 'happling') {
    //     next({name: 'home'})
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/happling',
    name: 'happling',
    component: Happling
  },
  {
    path: '/happlossome',
    name: 'happlossome',
    component: Happlossome
  },
  {
    path: '/happlower',
    name: 'happlower',
    component: Happlower
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
