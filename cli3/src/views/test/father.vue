<template>
    <div>
      <son :myObj="myObj"></son>
      {{myObj.myval}}
    </div>
</template>

<script>
  import son from './son'
  export default {
    components:{
      son
    },
    data () {
      return {
        myObj:{
          myval:''
        }
      };
    },
    created () {
      document.title = '首页';
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
