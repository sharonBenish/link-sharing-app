import login from '../views/auth/login.vue'
import signup from '@/views/auth/signup.vue'
import Dashboard from '@/views/dashboard.vue'
import Preview from '@/views/preview.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'login',
      component: login
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ],
})

export default router
