// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import App from './App';
import router from './router';
// 引入并使用vue-resource网络请求模块
// 引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(MintUI);
var vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
console.log(vue);
