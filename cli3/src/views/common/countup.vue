<template>
  <div>
    <span :id="eleId"></span>
  </div>
</template>

<script>
  import CountUp from 'countup';

  export default {
    props: {
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
        require: true
      }
    },
    data () {
      return {};
    },
    created () {
      document.title = '首页';
    },
    computed: {
      eleId () {
        return `count_up_${this._uid}`;  // vue 提供的唯一id
      }
    },
    mounted () {
      this.$nextTick(() => {
        // 必须提供开始值
        const count = new CountUp(this.eleId,this.startVal,this.endVal);
        setTimeout(() => {
          count.start();
        }, 0);
      });
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>

</style>
