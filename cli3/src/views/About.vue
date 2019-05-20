<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>动态路由访问  http://localhost:8080/#/about/xxx</h2>
    <h2>动态路由参数:{{$route.params.id}}</h2>
    props:{{id}}, {{$route.params.id}} 依然生效
    {{$store.state.mixinNum}}
  </div>
</template>
<script>
  import myMixin from '../myMixin'
  export default {
    name:'about',
    mixins:[myMixin],   // 混入
    props:{
      id:{
        type:String,
        default:'haha'
      }
    },
    // 同个组件当路由变了时促发   嵌套路由时使用， about/1 about/2
    beforeRouteUpdate(to,from,next){
      console.log(to.name);
      next()
    }
  }
</script>
