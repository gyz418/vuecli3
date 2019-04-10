<template>
  <div>
    register
    <router-link to="/">toHome</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    created () {
      document.title = '首页';
    },
    // 页面未渲染
    beforeRouteEnter(to,from,next){
      next(vm => {
        console.log('拿到了vue实例',vm);
      })
    },
    beforeRouteLeave(to,from,next){
      let isConfirm=confirm('要离开吗')
      if(isConfirm){
        next()
      }else{
        next(false)
      }
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
