<template>
    <div>
      <item :list="list">
        <div slot="aa" slot-scope="obj" :attr="obj.age">hello,{{obj.age}} </div>
      </item>
    </div>
</template>

<script>
  import item from './item'
  export default {
    components:{
      item
    },
    data () {
      return {
        list:[
          {name:'kang',age:12},
          {name:'jia',age:122},
        ]
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
