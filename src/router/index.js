import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'PlanPurchase',
          name: 'PlanPurchase',
          component: () => import('../views/PlanPurchaseView.vue')
        },
        {
          path: 'FAQ',
          name: 'FAQ',
          component: () => import('../views/FAQView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 將頁面滾動到頂部
  window.scrollTo(0, 0)
  next()
})

export default router
