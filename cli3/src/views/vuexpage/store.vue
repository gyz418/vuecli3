<template>
  <div>
    {{testname}}
    <p>lastName: {{testLastName}}</p>
  </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex';
  /*
  import vuex from 'vuex'
  const mapState = vuex.mapState
  */
  export default {
    data () {
      return {};
    },
    created () {
      document.title = '首页';
    },
    computed: {
      /*   testname(){
           return this.$store.state.testname  // 直接计算属性
           return this.$store.state.user.testname  // user module
         },*/
      /*...mapState([
        'testname'
      ])*/
    /*  ...mapState({
        // testname:state=>state.testname
        testname:state=>state.user.testname
      })*/
      ...mapState('user',{   // 开启命名空间
        testname:state=>state.testname
      }),
      //=========  getteres
     /* testLastName(){
        return this.$store.getters.testLastName // 不用()
      }*/
     /*...mapGetters([
       'testLastName'
     ])*/
      ...mapGetters('user',[  //开启命名空间
        'testLastName'
      ])
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
