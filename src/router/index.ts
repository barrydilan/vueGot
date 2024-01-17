import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import PersonPageView from '@/views/PersonPageView.vue'
import HousePageView from '@/views/HousePageView.vue'

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
    {
      path: '/house/:slug',
      name: 'house',
      component: HousePageView
    },
  ]
})

export default router
