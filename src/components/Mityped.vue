<template>
  <div class="mityped">
    <a href="//oom-cc.com">
      <span id="element" class="h2"></span>
    </a>
  </div>
</template>
<script>
  import {init} from 'ityped';

  export default {
    name: 'Mityped',
    mounted (){
      init('#element', {
        strings: ['极坐标双数值轴', 'By iTyped & Echarts', 'oom-cc'],
        typeSpeed: 90,
        backSpeed: 40,
        startDelay: 600,
        backDelay: 600,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onFinished: function () {
        }
      });
    }
  };

</script>
<style>
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #2c3e50;
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
