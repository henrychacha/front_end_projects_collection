import Vue from 'vue'
import Router from 'vue-router'
import Shopcart from '@/components/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Shopcart
    }
  ]
})
