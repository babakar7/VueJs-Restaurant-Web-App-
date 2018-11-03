import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//import Menu from '@/components/Menu'
//import Admin from '@/components/admin/Admin'


// webpack code splitting import 
const Menu = () => import('@/components/Menu')
const Admin = () => import('@/components/admin/Admin')


Vue.use(Router)

export default new Router({

  mode:'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {

      path:'/menu',
      name:'Menu',
      component:Menu
    },

    {

      path:'/admin',
      name:'Admin',
      component:Admin,


    },

    {

      path:'*',
      redirect:{name:'Home'},
    }
  ],

})
