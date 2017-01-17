<template>
  <div class="home">
    <mt-header :title=msg class="red" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <div class="member-list" >
        <div class="single-member effect-2"  v-for="article in articles" v-on:click="showDescrip($event)">
          <div class="member-image">
            <img src="../assets/member_270x210.jpg" v-lazy=article.images.large  alt="Member">
          </div>
          <div class="member-info">
            <h3>{{article.title}}</h3>
            <h5>类型：{{article.subtype}} / 年份：{{article.year}}</h5>
            <p>Description...by oom-cc</p>
            <div class="social-touch">
              <a class="fb-touch" href="#"></a>
              <a class="tweet-touch" href="#"></a>
              <a class="linkedin-touch" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script type="text/babel">
  import { Toast, Indicator } from 'mint-ui';
  // mounted 钩子函数  这里去请求豆瓣数据
  export default {
    name: 'home',
    data () {
      return {
        msg: '豆瓣电影Top250',
        current: 1,
        allLoaded: true,
        articles: []
      };
    },
    created: function () {  // 这里mounted和created生命周期函数区别
      Indicator.open('加载中...');
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=250', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        console.log(response);
        this.articles = response.data.subjects;
        // this.articles = response.data["subjects"] 也可以
        Indicator.close();
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response);
        Indicator.close();
      });
    },
    methods: {
      loadTop () {
        Toast('loadTop');
      },

      loadBottom () {
        Toast('loadBottom');
      },

      allLoaded () {
        Toast('allLoaded');
      },
      showDescrip ($event) {
        console.log($event);
        Toast({
          message: 'Click触发',
          iconClass: 'mintui mintui-success'
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
 @import '../assets/css/member-card.css';

</style>
