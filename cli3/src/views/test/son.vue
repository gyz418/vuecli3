<template>
  <div>
    <input type="text" v-model="myObj.myval">
  </div>
</template>

<script>
  export default {
    props: {
      myObj:{
        myval:''
      }
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
