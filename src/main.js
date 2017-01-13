// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import App from './App';
import routes from './route';
// 引入并使用vue-resource网络请求模块
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(MintUI);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true,
  routes
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
