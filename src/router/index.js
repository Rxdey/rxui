import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: resolve => require(['@/view/home.vue'], resolve),
    redirect:'/test',
    children: [{
        path: '/test',
        name: 'test',
        component: resolve => require(['@/docs/test.md'], resolve)
      },
      {
        path: '/button',
        name: 'button',
        component: resolve => require(['@/docs/button.md'], resolve)
      },
      {
        path: '/toast',
        name: 'toast',
        component: resolve => require(['@/docs/toast.md'], resolve)
      },
      {
        path: '/modal',
        name: 'modal',
        component: resolve => require(['../../packges/modal/src/modal.vue'], resolve)
      },
    ]
  }]
})
