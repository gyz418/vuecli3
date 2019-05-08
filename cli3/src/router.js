import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  // mode: 'history',    // 需要后端配合，好像自己给个404也可以了

  // 我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
  routes: [
    // 懒加载 命名路由 别名
    {
      path: '/',
      alias: '/tomyhome',
      name: 'myhome',
      component: Home
      // component:()=>import('./views/Home.vue')  // 懒加载
    },
    // 动态路由  props
    {
      path: '/about/:id',  // 动态路由
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      props: true, // 把动态路由参数转成props接收
      meta: {
        title: '关于'  // 设置标题
      }
    },
    // 嵌套路由，注意拼写
    {
      path: '/parent',
      component: () => import('./views/parent.vue'),
      children: [{
        path: 'child',
        component: () => import('./views/child.vue')
      }]
    },
    // 命名空间 多个 router-view     <router-view name='email'>  加载对应的页面
    {
      path: '/name_view',
      components: {  // 有's'
        default: () => import('./views/child'),
        email: () => import('./views/email'),
        tel: () => import('./views/tel')
      }
    },
    // 重定向
    {
      path: '/main',
      // redirect:'/'  // 默认形式
      /*    redirect:{    // 命名空间形式
            name:'myhome'
          }*/
      /* redirect: to => {
         // 可以做一些判断
         return{
           name:'myhome'
         }
       }*/
      /*redirect:to=>{
       return '/'
      }*/
      // redirect:to=> '/',   // 简写
    },
    // props 传参
    {
      path: '/props',
      component: () => import('./views/props'),
      /*props: {
        age: '12'  // 在这里传参。。   http://localhost:8080/#/props
      }*/
      props: route => ({
        age: route.query.age   // 在地址栏上进行手动赋值     http://localhost:8080/#/props?age=212
      })
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue'),
      beforeEnter: (to, from, next) => {
        console.log(from.name);
        next();
      }
    },
    // 404 放最后, 后端重定向到首页，前端不用处理了
  /*  {
      path: '*',
      component: () => import('./views/404.vue')
    }*/
    {
      path:'/father',
      component:()=>import('./views/fatherson/father')
    },
    {
      path:'/father2',
      component:()=>import('./views/fatherson2/father2')
    },
    {
      path:'/store',
      component:()=>import('./views/vuexpage/store')
    },
    {
      path:'/axios',
      component:()=>import('./views/axios')
    },
    // 组件封装
    {
      path:'/counts',
      component:()=>import('./views/counts')
    },
    // emit
    {
      path:'/emit',
      component:()=>import('./views/emit/father')
    },
    // jsx
    {
      path:'/jsx',
      component:()=>import('./views/jsx/jsx2')
    },
  ]
});
let setTitle = (title => {
  document.title = title || 'admin';
});
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);   // 感觉意义不大
  if (to.name === 'login') {
    console.log(1);
    next({name: 'register'});  // 命名路由跳转
  } else {
    next();
  }
});
router.afterEach((to, from) => {

});

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router;
