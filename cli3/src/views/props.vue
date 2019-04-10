<template>
    <div>
      {{age}}
    </div>
</template>

<script>
  export default {
    props:{
      age:{
        type:String,
        default:'30'
      }
    },
    data () {
      return {};
    },
    created () {
      document.title = '首页';
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
