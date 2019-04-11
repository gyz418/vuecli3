const state = {
  testname:'kang'
}
const getters ={
  testLastName:(state)=>{
    return state.testname+' abcd'
  }
}
export default {
  namespaced:true, // 使用命名空间
  state,
  getters,
  module:{
    // 模块中加以再加载模块
  }
}
