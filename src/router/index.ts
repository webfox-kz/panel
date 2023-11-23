import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import pb from '@/lib/pocketbase'
import useAuth from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    NProgress.set(0.3)

    if (!pb.authStore.isValid) {
      if (!to.meta.public) {
        return next({ name: 'login' })
      }

      return next()
    }

    const authStore = useAuth()

    try {
      await pb.collection('users').authRefresh()

      authStore.setUser(pb.authStore.model)

      if (to.meta.public) {
        return next({ name: 'home' })
      }

      return next()
    } catch (e) {
      pb.authStore.clear()

      authStore.setUser(null)

      return next({ name: 'login' })
    }
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router
