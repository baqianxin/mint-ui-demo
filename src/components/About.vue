<template>
  <div id="contain">
    <img src="../assets/logo.png">
    <div class="page-toast">
      <Mityped></Mityped>
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large">Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
      </div>
    </div>
    <mt-cell
      title=""
      to="//oom-cc.com"
      is-link
      value="oom-cc">
    </mt-cell>
    <hello></hello>
  </div>
</template>
<script type="text/babel">
  import {Toast} from 'mint-ui';
  import Hello from './Hello';
  import Mityped from './Mityped';

  export default {
    components: {
      Hello,
      Mityped
    },
    mounted (){
      console.log('App');
    },
    methods: {
      openToast () {
        Toast('Message');
      },

      openToastWithIcon () {
        Toast({
          message: 'Success',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast () {
        Toast({
          message: 'Toast',
          position: 'bottom'
        });
      }
    }
  };
</script>


<style>
#contain {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
