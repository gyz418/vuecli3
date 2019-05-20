import Vue from 'vue';
import Vuex from 'vuex';
import user from './module/user';
import saveInLocal from './views/vuexpage/plugins/saveInLocal';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict:false, // 严格模式
  strict: process.env.NODE_ENV === 'developer',
  state: {
    testname: 'haha',
    stateVal: '666',
    mixinNum: 999,  // 通过 store 来判断，很多组件显示，且只能有一个组件修改了值，
  },

  getters: {
    // 当多个地方需要对 state.testname 进行拼接、截取操作时，getters就可以统一处理了，否则，可在xxx.vue调用时再处理
    testLastName: (state) => {
      // return state.testname.substr(-1)
      return state.testname + ' abc';
    },
    getMixinNum: (state) => {
      return state.mixinNum;
    },
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
    SET_STATE_VAL (state, params) {
      state.stateVal = params;
    },
    setMixin (state) {
      state.mixinNum++;
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
    },
    // rootState指模块的上级根 state
    //  updateTestName({commit,state,rootState，dispatch}){
    //    dispatch('xxx','')
    //  },
    // xxx(){},

    addMixin ({state, commit}) {
      if (state.mixinNum !== 1000) {
        commit('setMixin');    // 提交 mutation   这里控制只执行一次
      }
    }
  },
  modules: {
    user,
  },
  // plugins: [saveInLocal]   // 把 state保存到 本地 ，刷新不丢失
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
