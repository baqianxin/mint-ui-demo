/**
 * Created by oom on 17-1-14.
 */
import NavConfig from './nav.config.json';

let
  routeStatic = [{
    path: '/home',
    component: require('../components/Home.vue')
  },
  {
    path: '/index',
    component: require('../components/About.vue')
  },
  {
    path: '/slelect',
    component: require('../components/About.vue')
  },
  {
    path: '/toast',
    component: require('../pages/toast.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
  ];

const registerRoute = function(config){
  let route = [];
  config.map(nav =>
    nav.list.map(
      function(item) {
        route.push(item);
      }
    )
  );
  return route;
};

const route = registerRoute(NavConfig);
console.log(route);
console.log(routeStatic);
export default route;
