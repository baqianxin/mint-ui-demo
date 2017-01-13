<template>
  <div id="app">
    <div class="main">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
    <!--<mt-tabbar :selected.sync="selected" fixed>-->
        <!--<mt-tab-item id="主页" v-href="index" >-->
          <!--<img slot="icon" src="./assets/100x100.png">-->
          <!--外卖-->
        <!--</mt-tab-item>-->
      <!--<mt-tab-item id="发现" href="home">-->
        <!--<img slot="icon" src="./assets/100x100.png">-->
        <!--订单-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="精选" href="select">-->
        <!--<img slot="icon" src="./assets/100x100.png">-->
        <!--发现-->
      <!--</mt-tab-item>-->
      <!--<mt-tab-item id="关于" v-href="linkAbout" is-link>-->
        <!--<img slot="icon" src="./assets/100x100.png">-->
        <!--我的-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      selected: true,
      linkAbout: '/about'
    };
  },
  components: {
    // Hello
  }
};

</script>

<style>
body{
  background-color: #f8f8ff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.main{
  width:100%;
  height: auto;
}
</style>
