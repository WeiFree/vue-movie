import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/movie/movie'
import music from '@/components/music/card'
import subject from '@/components/movie/MovieSubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/test',
      children:[{
      	path:'/test',
      	component:test
      },
      {
      	path:'/music',
      	component:music
      }
      ]
    },{
    	path:'/subject/:id',
    	name:'subject',
    	component:subject,
    }
  ]
})
