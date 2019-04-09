import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // 懒加载 命名路由
    {
      path: '/',
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
    }
  ]
});
