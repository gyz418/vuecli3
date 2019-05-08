<template>
    <div>
      <div class="list" v-for="(val,key) in list" :key="key">
        {{val.name}}
        <slot name="aa" :age="val.age"></slot>   <!-- 插槽传值 -->
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      list:''
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
