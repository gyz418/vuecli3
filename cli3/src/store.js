import Vue from 'vue';
import Vuex from 'vuex';
import user from './module/user';
import saveInLocal from './views/vuexpage/plugins/saveInLocal'
Vue.use(Vuex);

export default new Vuex.Store({
  // strict:false, // 严格模式
  strict:process.env.NODE_ENV === 'developer',
  state: {
    testname: 'haha',
    stateVal:'666'
  },

  getters: {
    // 当多个地方需要对 state.testname 进行拼接、截取操作时，getters就可以统一处理了，否则，可在xxx.vue调用时再处理
    testLastName: (state) => {
      // return state.testname.substr(-1)
      return state.testname + ' abc';
    }
  },
  // 修改 state
  mutations: {
    SET_TEST_NAME (state, params) {
      state.testname = params;
    },
    /*   SET_TEST_NAME (state, params) {
         state.testname = params.name;
       },*/
    // 给 state添加 属性  添加 state属性 testage
    SET_STATE_TESTAGE (state) {
      Vue.set(state, 'testage', '12');   // 响应式
      // state.testage='12' // 一般
    },
    SET_STATE_VAL(state,params){
      state.stateVal=params
    }
  },
  actions: {
    /*updateTestName(obj){
      const commit = obj.commit
    }*/
    // 简写
    /*updateTestName({commit}){
      /!*apiGetName().then(res=>{
        // commit('SET_TEST_NAME',res.info.testname)
        const {info:{testname}}=res // 解构赋值
        commit('SET_TEST_NAME',testname)
        console.log(res);
      })*!/
    }*/
    // async
    async updateTestName ({commit}) {
      try {
        const {info: {testname}} = await apiGetName();
        commit('SET_TEST_NAME', testname);
      } catch (e) {
        console.log(e);
      }
    }
                                                      // rootState指模块的上级根 state
    //  updateTestName({commit,state,rootState，dispatch}){
    //    dispatch('xxx','')
    //  },
    // xxx(){},
  },
  modules: {
    user,
  },
  plugins:[saveInLocal]
});

function apiGetName () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200, info: {testname: 'how are you'}
      });
    });
  });
}
