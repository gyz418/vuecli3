<template>
    <div>
      tel.com
      <p>{{email}}</p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        email:''
      };
    },
    created () {
      document.title = '首页';
    },
    mounted(){
      this.$Bus.$on('emailClick',res=>{  // 跨router-view 监听,加了 bus 文件
        this.email=res
      })
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
