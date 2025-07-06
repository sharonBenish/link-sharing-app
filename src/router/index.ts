import login from '../views/auth/templogin.vue'
import signin from '@/views/auth/tempsignin.vue'
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
      component: signin
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
