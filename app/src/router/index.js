import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
