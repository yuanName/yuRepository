import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 

import SearchNav from '@/components/SearchNav'
import TabbarNav from '@/components/TabbarNav' 
import SingleProductNav from '@/components/SingleProductNav'

import Login from '@/views/Login'
import Register from '@/views/Register' 
import ClassificationView from '@/views/ClassificationView'
import ShoppingCartView from '@/views/ShoppingCartView'
import PersonalCenterView from '@/views/PersonalCenterView' 
import HomeView from "@/views/HomeView"

import PerInfoUpdate from "@/views/PerInfoUpdate"
import SingleProduct from '@/views/SingleProduct'
import SearchView from '@/views/SearchView'
import SearchInput from '@/views/SearchInput'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
     {
      path: '/part/searchNav',
      name: 'SearchNav',
      component: SearchNav
    },
    {
      path: '/part/tabbarNav',
      name: 'TabbarNav',
      component: TabbarNav
    },
		{
			path: '/part/singleProductNav',
			name:'SingleProductNav',
			component: SingleProductNav
		},
		{
			path: '/pages/login',
			name: 'Login',
			component: Login
		},
 
		{
      path: '/pages/register',
      name: 'Register',
      component: Register
    }, 
    {
      path: '/pages/classificationView',
      name: 'ClassificationView',
      component: ClassificationView
    },{
      path: '/pages/shoppingCartView',
      name: 'ShoppingCartView',
      component: ShoppingCartView
    },{
      path: '/pages/personalCenterView',
      name: 'PersonalCenterView',
      component: PersonalCenterView
     },
		 {
		 	path: '/pages/homeView',
		 	name: 'HomeView',
		 	component: HomeView
		 },
		 {
			 path: '/pages/perInfoUpdate',
			 name: 'PerInfoUpdate',
			 component: PerInfoUpdate
		 },
		 {
			 path: '/pages/singleProduct',
			 name: 'SingleProduct',
			 component: SingleProduct
		 },
		 {
			 path: '/pages/searchView',
			 name: 'SearchView',
			 component: SearchView
		 },
		 {
			 path: '/pages/searchInput',
			 name: 'SearchInput',
			 component: SearchInput
		 }
  ]
})
