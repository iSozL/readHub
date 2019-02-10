import Vue from 'vue'
import Router from 'vue-router'
import '../assets/styles/reset.css'
import index from '@/components/header-index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }
  ]
})
