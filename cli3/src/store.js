import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testname:'kang'
  },
  getters:{
    testLastName:(state)=>{
      // return state.testname.substr(-1)
      return state.testname+' abc'
    }
  },
  mutations: {

  },
  actions: {

  },
  modules:{
    user,
  }
})
