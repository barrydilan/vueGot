import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import PersonPageView from '@/views/PersonPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/person/:slug',
      name: 'person',
      component: PersonPageView
    },
  ]
})

export default router
