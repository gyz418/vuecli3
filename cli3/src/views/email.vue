<template>
    <div>
      <p @click="email">click email.com</p>
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
    methods: {
      email(){
        this.$Bus.$emit('emailClick','i am email')
      }
    },
  };

</script>
<style lang="scss" scoped>

</style>
