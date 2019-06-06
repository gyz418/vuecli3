<template>
    <div>
      <p>koa</p>
      <div class="list" v-for="(val,key) in list" :key="key">
        {{val.id+': '+val.name}}
      </div>
      {{player.nickname}}
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        url:'http://localhost:3000',
        list:'',
        player:''
      };
    },
    created () {
      document.title = 'koa';
      this.get()
    },
    methods: {
      get(){
        axios.get(this.url+'/getUser').then(res=>{
          console.log('res',res.data);
          // this.list=res.data
          this.player=res.data
        }).catch(err=>{
          console.log('err',err);
        })
      }
    }
  };

</script>
<style lang="scss" scoped>

</style>
