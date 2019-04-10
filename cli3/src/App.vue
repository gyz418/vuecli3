<template>
  <div id="app">
    <div id="nav">
      <router-link to="/store">store.vue</router-link> |
      <router-link to="/about/1">about1</router-link> |
      <router-link to="/about/2">about2</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'myhome'}">命名路由home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 组件切换动画，transition-group router-view要加key-->
    <!-- name 用于多个router-view 识别 -->
    <!--<transition-group name="router">-->
    <transition-group :name="transitionName">
      <router-view key="default"/>
      <router-view key="tel" name="tel"/>
      <router-view key="email" name="email"/>
    </transition-group>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        transitionName:''
      }
    },
    watch:{
      '$route'(to){
        // 如果有传参就有过渡动画 transitionName=router 必须为router 值跟样式一致  .router-enter
        // http://localhost:8080/about/123?transitionName=router
        to.query && to.query.transitionName && (this.transitionName=to.query.transitionName)
      }
    }
  }
</script>
<style lang="less">

  // 页面进入时 0-1   效果怪怪的。
  .router-enter{
    opacity: 0;
  }
  .router-enter-active{
    transition: opacity 1s ease;
  }
  .router-enter-to{
    opacity: 1;
  }
  // 离开时 1-0
  .router-leave{
    opacity: 1;
  }
  .router-leave-active{
    transition: opacity 1s ease;
  }
  .router-leave-to{
    opacity: 0;
  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
