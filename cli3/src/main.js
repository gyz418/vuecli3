import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Bus from './tools/bus';
// import MintUI from 'mint-ui'    // 这里不用引 mint-ui
import '@/assets/mintui.css';
import emit from './views/emit/father'  // 引父组件
import emitson from './views/emit/son'  // 引父组件

if (process.env.NODE_ENV === 'development') require('./mock/mock');   // 开发环境引入 mock.js

Vue.prototype.$Bus = Bus;
Vue.config.productionTip = false;
// Vue.use(MintUI)

new Vue({
  router,
  store,
  // render: h => h(App)
  // render:h=>h(emit)
  render:h=>h(emitson,{
    props:{  // 传 props
      value:'haha'
    }
  })
/*
//  渲染div
  render: h => {
    return h('div', {
      attrs: {
        id: 'box',
      },
      style: {
        color: 'red'
      }
    },'haha');
  }*/
}).$mount('#app');
