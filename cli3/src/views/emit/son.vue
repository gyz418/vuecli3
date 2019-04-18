<template>
    <div>
      <!--<p>{{name}}</p>-->
      <p>{{value}}</p>
      <button @click="changeName">click</button>
      <button @click="changeName2">click2</button>
      <button @click="changeName3">click3</button>
    </div>
</template>

<script>

  export default {
    props:{
      // name:'',
      value:'',
    },
    data () {
      return {};
    },
    created () {
      document.title = '首页';
    },
    methods: {
      /**
       * 'update:name','new name'
       *         props   值
       */
      changeName(){
        this.$emit('update:name','new name')
      },
      changeName2(){
        this.$emit('changeName2','new name2')
      },
      changeName3(){  // 这里用 input props属性名必须为value 才生效  父组件用 v-model
        this.$emit('input','new name3')
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
