// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';

Vue.use(MintUI);
var vue = new Vue({
  el: '#app',
  render: h => h(App)
});
console.log(vue);
