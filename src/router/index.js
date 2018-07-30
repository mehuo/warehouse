import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/views/system/user'
import Role from '@/views/system/role'
import Login from '@/views/system/login'

import addProd from '@/views/store/addprod'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    },
    {
        path: '/addProduct',
        name: 'addProduct',
        component: addProd
    },

  ]
})
