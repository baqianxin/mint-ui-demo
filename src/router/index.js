/**
 * Created by oom on 17-1-12.
 */
// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue';
import VueRouter from 'vue-router';
import pathArray from './path.array';
Vue.use(VueRouter);

// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: pathArray
});

// 输出router
export default router;
