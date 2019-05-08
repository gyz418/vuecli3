<template>
    <div>
      <!-- @mousemove.prevent 阻止选择文本 -->
      <div v-for="(val,key) in list" :key="key" @mousemove.prevent>
        <span v-if="!render">{{val.name}}</span>
        <rander-dom v-else :render-func="render" :name="val.name"></rander-dom>
      </div>
    </div>
</template>

<script>
  import RanderDom from './render-dom'
  export default {
    components:{
      RanderDom
    },
    props:{
      list:{
        type:Array,
        default:()=>[]
      },
      render:{
        type:Function,
        default:()=>{}
      }
    },
    created () {
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
