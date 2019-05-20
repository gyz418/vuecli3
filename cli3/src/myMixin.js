//  多个组件要执行相同的请求 xxx ,  拿  about2 和 home 来做实验
// export default {} 里面可以放  vue的生命周期各种函数
export default {
  created () {
      console.log('mixin公共请求');
  }
};
