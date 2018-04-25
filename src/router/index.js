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
        components: {
          default:resolve => require(['@/docs/button.md'], resolve),
          other:resolve => require(['@/view/example/button.vue'], resolve)
        }
      },
      {
        path: '/toast',
        name: 'toast',
        components:{
          default:resolve => require(['@/docs/toast.md'], resolve),
          other:resolve => require(['@/view/example/toast.vue'], resolve)
        }
      },
      {
        path: '/MessageBox',
        name: 'MessageBox',
        components:{
          default:resolve => require(['@/docs/MessageBox.md'], resolve),
          other:resolve => require(['@/view/example/MessageBox.vue'], resolve)
        }
      },
    ]
  },
{
  path: '/page',
  name: 'page',
  component: resolve => require(['@/view/page.vue'], resolve),
  children:[
    {
      path:'/btn',
      name:'btn',
      component:resolve => require(['@/view/example/button.vue'], resolve)
    },
    {
      path:'/t',
      name:'t',
      component:resolve => require(['@/view/example/toast.vue'], resolve)
    },
    {
      path: '/msg',
      name: 'msg',
      component:resolve => require(['@/view/example/MessageBox.vue'], resolve)
    }
  ]
}
]
})
