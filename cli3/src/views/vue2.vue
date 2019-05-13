<template>
    <div>
      <p>新特性</p>
      {{obj.name}}
      <button @click="obj.name='test'">btn</button><br>
      <a :[attrName]="url">hahaha</a>
      <p @[methodName]="test">test</p>
      <p>{{lastName}}</p>
      <p>{{firstName}}</p>
      {{arr}}
      <input type="text" v-model.lazy="msg">
    </div>
</template>

<script>
  export default {
    data(){
      return{
        obj:'',
        attrName:'href',  // 动态属性
        methodName:'click',
        url:'http://www.baidu.com',
        firstName:'kang',
        arr:['a','b'],
        msg:'12'
      }
    },
    created(){
      let obj ={
        name:'kang'
      }
      Object.freeze(obj)    // Object.freeze() 后再赋值给data()
      this.obj=obj;
      this.lastName='hahaha'  // 触发 computed 的 lastName  set()
      this.arr[1]=3
      console.log(typeof this.msg);
      setTimeout(()=>{
        console.log(this.msg);
      },3000)
    },
    computed:{
      /*lastName(){
        return this.firstName+' jia'
      }*/
      lastName:{
        get(){
          return this.firstName+' jia'
        },
        set(newVal){
          this.firstName=newVal
        }
      }
    },
    methods: {
      test(){
        console.log(1);
      },

    }
  };

</script>
<style lang="scss" scoped>

</style>
