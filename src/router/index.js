import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homepage/Index.vue')
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: () => import('../views/reserve/Reserve.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register/Register.vue')
    },
    {
      path: '/setup-profile',
      name: 'setup-profile',
      component: () => import('../views/auth/profile-setup/ProfileSetupComponent.vue'),
      props: route => ({ query: route.query.role })
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reserve-info',
      name: 'reserve-info',
      component: () => import('../views/reserve/Index.vue')
    }
  ]
})

export default router
