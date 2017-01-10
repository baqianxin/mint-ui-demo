// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { init } from 'ityped';
import App from './App.vue';

Vue.use(MintUI);
var vue = new Vue({
  el: '#app',
  render: h => h(App)
});
init('#element', {
  strings: ['Design Typing', 'By iTyped.js', 'oom-cc'],
  typeSpeed: 55,
  backSpeed: 30,
  startDelay: 500,
  backDelay: 500,
  loop: false,
  showCursor: true,
  cursorChar: '|',
  onFinished: function(){}
});
console.log(vue);
