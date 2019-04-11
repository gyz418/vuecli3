<template>
  <div>
    <input type="text" v-model="stateVal">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        stateVal: '',
      };
    },
    watch: {
      stateVal(val){
        this.$emit('stateValChange',val)
      }
    },
  };

</script>
