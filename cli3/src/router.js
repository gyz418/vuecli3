import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 懒加载 命名路由 别名
    {
      path: '/',
      alias:'/tomyhome',
      name: 'myhome',
      component: Home
      // component:()=>import('./views/Home.vue')  // 懒加载
    },
    // 动态路由
    {
      path: '/about/:id',  // 动态路由
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    }
  ]
});
