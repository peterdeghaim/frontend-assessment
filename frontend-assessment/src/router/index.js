import { createRouter, createWebHistory } from 'vue-router'
import Exercise1 from '../views/Exercise1.vue'
import Exercise2 from '../views/Exercise2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Exercise1',
      component: Exercise1
    },
    {
      path: '/exercise2',
      name: 'Exercise2',
      component: Exercise2
    }
  ]
})

export default router
