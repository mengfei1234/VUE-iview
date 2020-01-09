import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginFace from '@/views/loginFace'
import PersonProfile from '@/components/personView/PersonProfile'
import VueProfile from '@/components/personView/VueProfile'
import ReactProfile from '@/components/personView/ReactProfile'
import cssProfile from '@/components/personView/cssProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loginFace',
      name: 'loginFace',
      component: loginFace,
      children: [
        {
          path: '/loginFace/PersonProfile',
          name: 'PersonProfile',
          component: PersonProfile,
        },
        {
          path: '/loginFace/VueProfile',
          name: 'VueProfile',
          component: VueProfile
        },
        {
          path: '/loginFace/ReactProfile',
          name: 'ReactProfile',
          component: ReactProfile
        },
        {
          path: '/loginFace/cssProfile',
          name: 'cssProfile',
          component: cssProfile
        },
      ]
    },
    // {
    //   path: '/IndexHeader',
    //   name: 'IndexHeader',
    //   component: IndexHeader,
    // },
  ]
})
