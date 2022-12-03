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
      component: () => import('../pages/CatalogPage.vue'),
    },
    {
      path: '/:videotype/:kinopoisk_id',
      component: () => import('../pages/FilmPage.vue')
    }
  ],
})

export default router