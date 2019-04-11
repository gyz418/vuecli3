<template>
    <div>
      <son v-model="newVal"></son>
      father2:{{newVal}}
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import son from './son2'
  export default {
    components:{
      son
    },
    data () {
      return {
        newVal:'',
      };
    },
    created () {
      document.title = '首页';
    },
    computed:{
      // vuex v-model 双向绑定
      newVal:{
        get () {
          return this.$store.state.stateVal;
        },
        set(val){
          this.SET_STATE_VAL(val)
        }
      }
    },
    methods: {
      ...mapMutations([
        'SET_STATE_VAL'
      ])
    }
  };

</script>
<style lang="scss" scoped>

</style>
