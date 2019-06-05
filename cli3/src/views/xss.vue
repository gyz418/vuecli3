<template>
    <div>
      <p>这是新加的内容</p>
      <p>'用标签加js 可引发v-html的 xss  &lt;</p>
      <!--直接  <script>alert('xss')</script>会被浏览器在浏览器加载页面的时候阻止了注入脚本。-->
      <input type="text" v-model="age">
      <button @click="submit">提交</button>
      <hr>
      <button @click="getAge">显示</button>
      <!--{{showAge}}-->
      <div v-html="showAge"></div>
    </div>
</template>

<script>
  let URL = 'http://localhost:3000';
  import axios from 'axios'
  export default {
    data () {
      return {
        age:'',
        showAge:'',
        // showAge:'<a onmouseover=alert(document.cookie)>点我</a>',
        // showAge:'<img src="notValidUrl" onerror=alert(document.cookie)>'
      };
    },
    created () {
      document.title = 'xss';
    },
    methods: {
      submit(){
        this.age=this.age.replace(/</,'&lt;').replace(/>/,'&gt;')  // 防止  <img src= 'xxx' onerror=alert('666') />
        axios.post(URL+'/submit',{
          age:this.age
        }).then(res=>{
          console.log('res',res.data);
        }).catch(err=>{
          console.log('err',err);
        })
      },
      getAge(){
        axios.get(URL+'/age').then(res=>{
          console.log('res',res.data);
          this.showAge=res.data
        })
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
