import category from '@/views/category/index.vue'
import home from '@/views/home/index.vue'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import subcategory from '@/views/subcategory/index.vue'
import { createRouter, createWebHistory } from 'vue-router'
import detail from '@/views/detail/index.vue'
import cartList from '@/views/cartList/index.vue'
import checkout from '@/views/checkout/index.vue'
import pay from '@/views/pay/index.vue'
import payback from '@/views/pay/payback.vue'
import member from '@/views/member/index.vue'
import user from '@/views/member/components/userInfo.vue'
import order from '@/views/member/components/userOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          component: home,
        },
        {
          path: 'category/:id',
          component: category,
        },
        {
          path: 'category/sub/:id',
          component: subcategory
        },
        {
          path: 'detail/:id',
          component: detail
        },
        {
          path: 'cartlist',
          component: cartList
        },
        {
          path: 'checkout',
          component: checkout
        },
        {
          path: 'pay',
          component: pay
        },
        {
          path: 'paycallback',
          component: payback
        },
        {
          path: 'member',
          component: member,
          children: [
            {
              path: '',
              component: user,
            },
            {
              path: 'order',
              component: order,
            },
          ]
        },
      ]

    },
    {
      path: '/login',
      component: login
    }
  ],
  scrollBehavior() { return { top: 0 } }
})

export default router
