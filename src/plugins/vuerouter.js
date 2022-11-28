import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      component: () => import('../pages/MainPage.vue')
    },
    {
      path: '/:videotype',
      component: () => import('../pages/CatalogPage.vue')
    }
  ],
})

export default router