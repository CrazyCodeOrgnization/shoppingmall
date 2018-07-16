import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/home/home.vue'
import goodsDetail from '../views/goods/goodDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    }
  ]
})
