import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/movie/card'
import music from '@/components/music/card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[{
      	path:'/test',
      	component:test
      },
      {
      	path:'/music',
      	component:music
      }
      ]
    }
  ]
})
