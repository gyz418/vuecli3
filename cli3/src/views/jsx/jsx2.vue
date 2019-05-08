<template>
    <div>
      <jsx :render="render"></jsx>
    </div>
</template>

<script>
  import jsx from './jsx22'
  import countup from '../common/countup'
  export default {
    components:{
      jsx
    },
    data () {
      return {
        name:33400
      };
    },
    methods: {
      render(h){
        // jsx  利用jsx给组件个性化添加样式等   点击事件用  nativeOn-click   $emit事件直接   on-xxx={}
        return (
          <countup nativeOn-click={this.handleClick} on-mycount={this.mycount} endVal={this.name} style={{color:'red'}}></countup>
        )
      },
      handleClick(e){
        console.log(e);
      },
      mycount(val){
        console.log(val);
      },
      stopSel(e){
        e.preventDefault()
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
