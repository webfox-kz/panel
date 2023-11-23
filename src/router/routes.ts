import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company/:company',
    children: [
      {
        path: '',
        name: 'CompanyIndex',
        component: () => import('@/views/company/CompanyView.vue')
      }
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView,
        meta: {
          public: true
        }
      }
    ]
  }
]

export default routes
