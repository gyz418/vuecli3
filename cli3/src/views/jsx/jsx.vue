<template>
    <div>
      <list :list="list" :style="{color:'red'}" :render="renderFunc"></list>
    </div>
</template>

<script>
  import list from './list'
  export default {
    components:{
      list
    },
    data () {
      return {
        list:[{name:'kang'},{name:'jia'}]
      };
    },
    created () {
    },
    methods: {
      renderFunc(h,name){
        /*return h('i',{
          style:{
            color:'pink'
          }
        },name)*/
        // jsx
        return (
          <i on-click={this.handleClick} style={{color:'blue'}}>{name}</i>
        )
      },
      handleClick(e){
        console.log(e);
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
