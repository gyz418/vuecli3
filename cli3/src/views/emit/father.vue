<template>
    <div>
      <!-- :name.sync  直接用.sync 省略方法 推荐 -->
      <son :name.sync="name" @changeName2="changeName2" v-model="name"></son>

      <!-- 方法三 v-model 内部会  @input="changeName2" 也可以省略方法 -->
    </div>
</template>

<script>
  import son from './son'
  export default {
    components:{
      son
    },
    data () {
      return {
        name:'emit',
      };
    },
    created () {
      document.title = '首页';
    },
    methods: {
      changeName2(val){
        this.name=val
      },
    }
  };

</script>
<style lang="scss" scoped>

</style>
