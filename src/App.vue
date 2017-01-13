<template>
  <div id="app">
    <mt-cell
      title=""
      to="/home"
      is-link
      value="oom-cc">
    </mt-cell>
    <mt-cell
      title=""
      to="/about"
      is-link
      value="oom-cc">
    </mt-cell>
    <div class="main">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
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
