import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/auth/register')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/auth/login')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/pages/dashboard/index.vue'),
    children: [
      {path: '/dashboard',
    name: 'All',
    component: () => import('../views/pages/dashboard/home.vue'),},
    {path: '/dashboard/pending',
    name: 'Pending',
    component: () => import('../views/pages/dashboard/pending.vue'),},
    {path: '/dashboard/scheduled',
    name: 'Scheduled',
    component: () => import('../views/pages/dashboard/scheduled.vue'),},
    {path: '/dashboard/declined',
    name: 'Declined',
    component: () => import('../views/pages/dashboard/declined.vue'),},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router