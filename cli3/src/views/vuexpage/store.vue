<template>
  <div>
    {{testname}}
    <p>lastName: {{testLastName}}</p>
    <button @click="setname">setLastName</button>
    <p>age:{{testage}}</p>
    <button @click="newModule">动态注册模块</button>
    <div v-for="(val,key) in todoList" :key="key">{{val}}</div>
  </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
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
      ...mapState({
        testname:state=>state.testname,
        testage:state=>state.testage,
        todoList:state=>state.todo?state.todo.todoList:[]
        // testname:state=>state.user.testname
      }),
    /*  ...mapState('user',{   // 开启命名空间    // 'user/username' 模块中的模块
        testname:state=>state.testname
      }),*/
      //=========  getteres
     /* testLastName(){
        return this.$store.getters.testLastName // 不用()
      }*/
     /*...mapGetters([
       'testLastName'
     ])*/
      ...mapGetters('user',[  //开启命名空间
        'testLastName'
      ]),

    },
    methods: {
      //======  mutation    居然写在方法里面 。。
      ...mapMutations([
        'SET_TEST_NAME'
      ]),
      ...mapActions([
        'updateTestName'
      ]),
      setname(){
        // commit mutation
        // this.$store.commit('SET_TEST_NAME','hahaha')
        /*this.$store.commit({
          type:'SET_TEST_NAME',
          name:'hehe'
        })*/
        this.$store.commit('SET_STATE_TESTAGE') // 增加个 state属性

        // 引入 mutation
        this.SET_TEST_NAME('jia')


        // dispatch action
        // this.$store.dispatch('updateTestName')

        // 引入 action
        // this.updateTestName()  // 调用 action
      },
      // 动态注册模块
      newModule(){
        // this.$store.registerModule(['user','todo'],{  // 把模块注册到user里面
        this.$store.registerModule('todo',{
          state:{
            todoList:['js','css']
          }
        })
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
