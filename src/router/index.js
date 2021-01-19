import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product/:slug',
      name: 'Product',
      component: Product,
      props: {
        header: true,
        content: true   
      }
    }
  ]
})

export default router
