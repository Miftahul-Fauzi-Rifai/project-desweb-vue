import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import BikesView from '../views/BikesView.vue'
import AccessoriesView from '../views/AccessoriesView.vue'
import ClothingView from '../views/ClothingView.vue'
import CartView from '../views/CartView.vue'
import UserView from '../views/UserView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/bikes/:category?',
      name: 'bikes',
      component: BikesView
    },
    {
      path: '/accessories/:category?',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '/clothing/:category?',
      name: 'clothing',
      component: ClothingView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
  ],
})

export default router