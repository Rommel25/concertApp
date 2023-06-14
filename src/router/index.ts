import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import LoginPage from '../views/LoginPage.vue';
import UserMainPage from '../views/UserMainPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path:'/mainPageUser',
    component: UserMainPage
  },
  {
    path:'/mainPageAdmin',
    component: () => import('@/views/AdminMainPage.vue')
  },
  {
    path:'/createConcert',
    component: () => import('@/views/CreateConcertPage.vue')
  },
  {
    path:'/seeConcert',
    component: () => import('@/views/ConcertListPage.vue')
  },
  {
    path:'/editConcert/:id',
    component: () => import('@/views/EditConcertPage.vue')
  },
  {
    path:'/concert',
    component: () => import('@/views/ConcertDetailsPage.vue')
  },
  {
    path:'/listUsers',
    component: () => import('@/views/UserListPage.vue')
  },
  {
    path:'/createUser',
    component: () => import('@/views/CreateUserPage.vue')
  },
  {
    path:'/listCategorie',
    component: () => import('@/views/CategorieListPage.vue')
  },
  {
    path:'/editCategorie/:id',
    component: () => import('@/views/CreateCategoriePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
