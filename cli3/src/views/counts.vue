<template>
    <div>
      <countsup :endVal="endVal"></countsup>
    </div>
</template>

<script>
  import countsup from './common/countup'
  export default {
    components: {countsup},
    data () {
      return {
        endVal:123
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
