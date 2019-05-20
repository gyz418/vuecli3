<template>
  <div class="home">
    {{'mixinNum: '+$store.state.mixinNum}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p @click="back">返回</p>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    methods: {
      // 页面跳转 返回 replace
      back () {
        // this.$router.back(); // 返回
        // http://localhost:8080/#/about/12?name=abc
    /*    this.$router.push({
          name: 'about', // 命名路由跳转
          query: {   // 参数
            name: 'abc'
          },
          params: {  // 路径
            id: 12
          }
        });*/
        const id = 12;
        this.$router.push({
          path: `/about/${id}?name=abc`  // 简写
          // path: `/about/test?name=abc`  //
        });
        // this.$router.replace();
      }
    }
  };
</script>
