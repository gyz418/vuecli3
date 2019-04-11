<template>
  <div>
    {{testname}}
    <p>lastName: {{testLastName}}</p>
    <button @click="setname">setLastName</button>
    <p>age:{{testage}}</p>
    <button @click="newModule">动态注册模块</button>
    <div v-for="(val,key) in todoList" :key="key">{{val}}</div>

    <son @stateValChange="stateValChange"></son>
    <p>{{stateVal}}</p>
  </div>
</template>

<script>
  /*
  import vuex from 'vuex'
  const mapState = vuex.mapState
  */
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  import son from './storeson';

  export default {
    components: {
      son
    },
    data () {
      return {
        stateVal:''
      };
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
        testname: state => state.testname,
        testage: state => state.testage,
        todoList: state => state.todo ? state.todo.todoList : []

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
      ...mapGetters('user', [  //开启命名空间
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
      setname () {
        // commit mutation
        // this.$store.commit('SET_TEST_NAME','hahaha')
        /*this.$store.commit({
          type:'SET_TEST_NAME',
          name:'hehe'
        })*/
        this.$store.commit('SET_STATE_TESTAGE'); // 增加个 state属性

        // 引入 mutation
        this.SET_TEST_NAME('jiadfdf');

        // dispatch action
        // this.$store.dispatch('updateTestName')

        // 引入 action
        // this.updateTestName()  // 调用 action

        // this.$store.state.testname='this is testname'  // 严格模式阻止直接修改 state 这种插件更新不了
      },
      // 动态注册模块
      newModule () {
        console.log(11);
        // this.$store.registerModule(['user','todos'],{  // 把模块注册到user里面
        this.$store.registerModule('todo', {
          state: {
            todoList: ['js', 'css']
          }
        });
      },
      stateValChange(val){
        this.stateVal=val
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
