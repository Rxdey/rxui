import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: resolve => require(['@/view/home.vue'], resolve),
      redirect: '/test',
      children: [{
          path: '/test',
          name: 'test',
          component: resolve => require(['@/docs/test.md'], resolve),
          meta: {
            other: '#/page'
          }
        },
        {
          path: '/button',
          name: 'button',
          components: {
            default: resolve => require(['@/docs/button.md'], resolve),
            // other:resolve => require(['@/view/example/button.vue'], resolve)
          },
          meta: {
            other: '#/btn'
          }
        },
        {
          path: '/toast',
          name: 'toast',
          components: {
            default: resolve => require(['@/docs/toast.md'], resolve),
          },
          meta: {
            other: '#/t'
          }
        },
        {
          path: '/MessageBox',
          name: 'MessageBox',
          components: {
            default: resolve => require(['@/docs/MessageBox.md'], resolve),
          },
          meta: {
            other: '#/msg'
          }
        },
        {
          path: '/loading',
          name: 'loading',
          components: {
            default: resolve => require(['@/docs/loading.md'], resolve),
          },
          meta: {
            other: '#/load'
          }
        },
        {
          path: '/actionsheet',
          name: 'actionsheet',
          components: {
            default: resolve => require(['@/docs/actionsheet.md'], resolve),
          },
          meta: {
            other: '#/as'
          }
        },
        {
          path: '/scroll',
          name: 'scroll',
          components: {
            default: resolve => require(['@/docs/scroller.md'], resolve),
          },
          meta: {
            other: '#/scroller'
          }
        },
        {
          path: '/popdoc',
          name: 'pop',
          components: {
            default: resolve => require(['@/docs/pop.md'], resolve),
          },
          meta: {
            other: '#/pop'
          }
        },
      ]
    },
    {
      path: '/page',
      name: 'page',
      component: resolve => require(['@/view/page.vue'], resolve),
      children: [{
          path: '/btn',
          name: 'btn',
          component: resolve => require(['@/view/example/button.vue'], resolve)
        },
        {
          path: '/t',
          name: 't',
          component: resolve => require(['@/view/example/toast.vue'], resolve)
        },
        {
          path: '/msg',
          name: 'msg',
          component: resolve => require(['@/view/example/MessageBox.vue'], resolve)
        },
        {
          path: '/load',
          name: 'load',
          component: resolve => require(['@/view/example/loading.vue'], resolve)
        },
        {
          path: '/as',
          name: 'as',
          component: resolve => require(['@/view/example/as.vue'], resolve)
        },
        {
          path: '/calender',
          name: 'calender',
          component: resolve => require(['@/view/example/calender.vue'], resolve)
        },
        {
          path: '/scroller',
          name: 'scroller',
          component: resolve => require(['@/view/example/scroller.vue'], resolve)
        },
        {
          path: '/pop',
          name: 'pop',
          component: resolve => require(['@/view/example/pop.vue'], resolve)
        }
      ]
    }
  ]
})
