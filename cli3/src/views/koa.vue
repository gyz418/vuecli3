<template>
    <div>
      <p>koa</p>
      <div class="list" v-for="(val,key) in list" :key="key">
        {{val.id+': '+val.name}}
      </div>
      {{player.id}}
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
        let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzIiwiaWF0IjoxNTYwNDc3Mzg0LCJleHAiOjE1NjA0OTE3ODR9.XZMuAStEi0co9pYxCq5hmqdoq-faVqqGLCweIBETZF4'
        axios({
          method:'get',
          url:this.url+'/result',
          // url:this.url+'/login',
          // url:this.url+'/list',
          headers:{'Authorization':token}
        }).then(res=>{
        // axios.get(this.url+'/result',{headers:{'authorization':token}}).then(res=>{
        // axios.get(this.url+'/list').then(res=>{
        // axios.post(this.url+'/getParam').then(res=>{
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
