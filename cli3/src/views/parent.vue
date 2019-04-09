<template>
    <div>
      this is parent, 嵌套
      <router-view/>
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
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
