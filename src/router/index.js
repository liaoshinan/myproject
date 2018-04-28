import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index';
import manage from '@/components/admin/manage';

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   // component: HelloWorld
    // }
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
    }
  ]
})
