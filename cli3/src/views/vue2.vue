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
      <input type="text" v-model.lazy="msg">   <!-- lazy 取消了数据绑定，只有在 change事件才会继续响应-->
      <son>newVal</son> <!-- 中间有值的话，可以替换插槽-->
    </div>
</template>

<script>
  import son from './vue2son'
  export default {
    components:{
      son
    },
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
