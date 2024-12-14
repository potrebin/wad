import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Signup from '../views/Signup.vue'
import ContactUs from '../views/ContactUs.vue'
import LogIn from "../views/Login.vue";
import auth from "../auth";



const routes = [{
  path: "/",
        name: "main",
        component: Main,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated(); //meetod auth failis
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactUs
  },
  {
      path: "/login",
      name: "LogIn",
      component: LogIn,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
