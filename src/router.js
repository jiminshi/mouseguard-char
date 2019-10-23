import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./components/HelloWorld.vue')
    }, 
    {
      path: '/main',
      component: () => import('./views/Main.vue')
    }, 
    {
      path: '/mouse', 
      component: () => import('./views/maker/MouseMaker.vue')
    }
  ]
})

export default router