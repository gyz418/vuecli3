/**
 * 应用场景：多个组件要请求同个数据，在store判断唯一性，用mixin封装公共vue实例，有created() mounted()等 封装成组件 Vue.use()
 */
// 把 mixin 封装成插件
let myOptions;

function myPlugin (options) {
  console.log('options', options);
  myOptions = options;   // 接收传进来的值
  // return myPlugin;   // 传参后就要返回？
}

/**
 * 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。
 * 如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
 * @param Vue
 */
myPlugin.install = function (Vue) {
  Vue.mixin({
    created () {
      // if (myOptions.includes(this.$options.name)) {  // this.$options 可拿到组件所有数据   myOptions是个数组
      if (this.$options.name==='home') {   // 字符串
        console.log('vue use 插件');
        this.$store.dispatch('addMixin');   // 分发 action
      }
    }
  });
};

export default myPlugin;
