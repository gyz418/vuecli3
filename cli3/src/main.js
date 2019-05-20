import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Bus from './tools/bus';
// import MintUI from 'mint-ui'    // 这里不用引 mint-ui
import '@/assets/mintui.css';
// import emit from './views/emit/father'  // 引父组件
import countup from './views/common/countup'  // 引子组件

if (process.env.NODE_ENV === 'development') require('./mock/mock');   // 开发环境引入 mock.js

Vue.prototype.$Bus = Bus;
Vue.config.productionTip = false;
// Vue.use(MintUI)

// import myMixin from './myMixin'
// Vue.mixin(myMixin)  // 全局mixin

import mixinPlugin from './mixinPlugin'
Vue.use(mixinPlugin)   // use  插件
// Vue.use(mixinPlugin(['about','home']))   // 传参数组

const handleClick=e=>{
  e.stopPropagation()
  console.log(e);
}

let list =[{name:'kang'},{name:'jia'}]
const getLiEleArr=(h)=>{
  return list.map((item,index)=>h('li', {
    on: {
      'click': handleClick
    },
    key: index
  },item.name))
}

new Vue({
  router,
  store,
  render: h => h(App)
  // render:h=>h(emit)
  // 渲染子组件 各种属性
  /*render:h=>h(countup,{
    // 'class':['className1'],  // 给组件外层div 添加样式
    // 'class':'hahaName',
    'class':{
      'testName':true
    },
    attrs:{}, // 属性
    style:{}, // 样式
    props:{  // 传 props
      endVal:100
    },
    /!*domProps:{
      innerHTML:'123'
    },*!/
    /!*
    * this.$emit('submitVal',val)
    * *!/
    /!*on:{  // 获取子组件 emit的事件
      'submitVal':(val)=>{
        console.log(val);
      }
    },*!/
    nativeOn:{   // 给组件外层div添加原生点击事件
      'click':()=>{
        console.log('click');
      }
    },
    directives:[],   // 指令
    slot:'',   // 把当前组件作为插槽
    key:'',
    ref:'',
  })*/
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
// render:h=>h('div','234')
/*render:h=>h('div',[
  h('span','222'),
  h('span','ddd')
])*/
// 渲染 v-for 列表
/*  render:h=>h('div',[
    h('ul',{
      on:{
        'click':handleClick
      }
    },getLiEleArr(h)),
  ])*/
}).$mount('#app');
