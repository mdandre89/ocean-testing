import Home from '../views/Home.vue'
import store from '../store/store'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/results',
    name: 'results no id',
    component: () => import('../views/Retrieve.vue')
  },
  {
    path: '/results/:id',
    name: 'results',
    component: () => import('../views/Results.vue')
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('../views/Policy.vue')
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/test',
    name: 'test',
    beforeEnter: (to, from, next) => {
      if (!store.state.test_started){next({ name: 'intro' })} else {
        next()
      }
    },
    component: () => import('../views/Test.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'catch-all',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
