import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nav from '@/components/nav.vue'
import home from '@/components/home.vue'
import index from '@/components/index.vue'

import '@/assets/css/mui.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/',
	  name: 'nav',
	  component: nav
	},
	{
	  path: '/home',
	  name: 'home',
	  component: home
	},
	{
	  path: '/index',
	  name: 'index',
	  component: index
	}
  ]
})
