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
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/apost/:id",
    name: "APost",
    component: APost,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
