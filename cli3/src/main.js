import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './tools/bus'
// import MintUI from 'mint-ui'    // 这里不用引 mint-ui
import '@/assets/mintui.css'

if(process.env.NODE_ENV==='development') require('./mock/mock')   // 开发环境引入 mock.js

Vue.prototype.$Bus=Bus
Vue.config.productionTip = false
// Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
