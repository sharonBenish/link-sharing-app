import login from '../views/auth/login.vue'
import signup from '@/views/auth/signup.vue'
import dashboard from '@/views/dashboard.vue'
import preview from '@/views/preview.vue'
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
      component: dashboard
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview
    }
  ],
})

export default router
