<template>
  <div>
    <div v-for="(val,key) in list" :key="key">
      <p>{{val.title}}</p>
      <p>{{val.author}}</p>

    </div>
  </div>
</template>

<script>
  // const url = 'http://localhost:1234';
  const url = 'http://localhost:3000';
  // import axios from 'axios'
  import axios from '../tools/axios';  // 封装过的 axios
  export default {
    data () {
      return {
        list: []
      };
    },

    created () {
      document.title = '首页';
      // this.getList()
      this.getList2();
    },
    methods: {
      getList () {
        axios.get(url + '/posts').then(res => {
          console.log(res);
        });
      },
      getList2 () {
        axios.request({
          method: 'get',
          // url:url+'/posts'
          // url: url + '/posts'
          // url:'/list'
          // url:'/posts'   // 加了代理proxy 所有访问都会加上代理前缀 http://localhost:1234  vue.config.js设置代理
          // url:'/api/a'
          url:'/api/b'
        }).then(res => {
          console.log('res',res);
          this.list = res;
        }).catch(err=>{
          console.log('err',err);
        })
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
