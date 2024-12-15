import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Signup from '../views/Signup.vue'
import ContactUs from '../views/ContactUs.vue'
import LogIn from "../views/Login.vue";
import auth from "../auth";
import AddPost from '@/views/AddPost.vue';
import APost from '@/views/APost.vue';



const routes = [{
  path: "/",
  name: "posts",
  component: Posts,
  beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
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
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated(); 
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  {
    path: "/apost/:id",
    name: "APost",
    component: APost,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated(); 
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  { //will route to AllPosts view if none of the previous routes apply
    path: "/:catchAll(.*)",
    name: "Login",
    component: LogIn,
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
