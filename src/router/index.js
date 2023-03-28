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
  ],
  scrollBehavior(to, from, savedPosition) {
    // 將頁面滾動到頂部
    if (to.hash) {
      return {
        el: to.hash,
        top: 160
      }
    } else {
      return {
        // 將頁面滾動到頂部
        top: 0
      }
    }
  }
})

export default router
