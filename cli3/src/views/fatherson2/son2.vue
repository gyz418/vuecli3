<template>
  <div>
    <input @input="handleInput" :value="value"/>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
    },
    methods: {
      handleInput(e){
        this.$emit('input',e.target.value)
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
