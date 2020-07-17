import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home.vue'

import Reviews from '@/components/review/Reviews.vue'
import Review from '@/components/review/Review.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/review/:id',
    props: true,
    name: 'Review',
    component: Review
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
