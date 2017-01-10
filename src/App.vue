<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="page-toast">
      <div>
        <span id="element" class="page-title h2"></span>
      </div>
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
      </div>
    </div>
    <mt-cell
      title=""
      to="//oom-cc.com"
      is-link
      value="oom-cc">
    </mt-cell>
  </div>
</template>
<script type="text/babel">
  import {Toast} from 'mint-ui';

  export default {
    methods: {
      openToast () {
        Toast('提示信息');
      },

      openToastWithIcon () {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast () {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.h2{
    font-size: 2rem;
}
.ityped-cursor {
    font-size: 2.2rem;
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
}

@keyframes blink {
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes blink {
    100% {
        opacity: 0;
    }
}

@-moz-keyframes blink {
    100% {
        opacity: 0;
    }
}
</style>
