/**
 * Created by oom on 17-1-12.
 */
import VueRouter from 'vue-router';
import MEcharts from './components/MEcharts';

Vue.use(VueRouter);
const router = new VueRouter(); // 这里可以带有路由器的配置参数
router.map({
  '/view-a': {
    component: MEcharts
  },
  '/view-b': {
    component: MEcharts
  }
});
export default router; // 将路由器导出
