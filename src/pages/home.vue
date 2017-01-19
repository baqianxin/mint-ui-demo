<template>
  <div class="home">
    <mt-header :title=msg class="red" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-swipe :auto="0">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="member-list" >
        <div class="single-member effect-2"  v-for="article in articles" v-on:click="showDescrip($event,article)">
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
    <div v-show=showModel v-if=showModel>
      <div class="mint-msgbox-wrapper" style="position: absolute; z-index: 2013;">
        <div class="mint-msgbox">
          <div class="mint-msgbox-content">
              <div class="member-image">
                  <img :src=current_articles.images.large  alt="Member">
              </div>
          </div>
            <div class="mint-msgbox-btns">
                  <button class="mint-msgbox-btn mint-msgbox-cancel " style="display: none;">取消</button>
                  <button class="mint-msgbox-btn mint-msgbox-confirm "  v-on:click="showDescrip($event,'')">确定</button>
              </div>
          </div>
      </div>
      <div class="v-modal"  v-on:click="showDescrip($event,'')"></div>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/member-card.css';
.model-wrap{
  z-index: 1000;
  overflow: hidden;
  position: fixed;
  top: 50px;
  width: 100%;
  height: 1000px;
  background: rgba(31,31,31,0.4);
}
.demo {
  margin-left: 10%;
  margin-top: 10%;
  max-width:80%;
  max-height:80%;
  background: #CDDBEE;
  border-radius: 6px;
}
.model-wrap .member-info {
  border-bottom: 5px solid #1fb554;
  height: 212px;
  overflow: hidden;
  width: 100%;
  transition: 0.4s;
  display: inline-block;
  float: none;
  vertical-align: middle;
}
.effect-3 {
    max-height: 100%;
    min-height: 302px;
    overflow: hidden;
}
.effect-3 .member-image{
  height: auto;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

<script type="text/babel">
  import {Toast, Indicator} from 'mint-ui';
  // mounted 钩子函数  这里去请求豆瓣数据
  export default {
    name: 'home',
    data () {
      return {
        msg: '豆瓣电影Top250',
        showModel: false,
        page: 1,
        allLoaded: true,
        articles: [],
        current_articles: {}
      };
    },
    created: function () {  // 这里mounted和created生命周期函数区别
      this.requestData();
    },
    methods: {
      loadTop () {
        this.page = 0;
        this.requestData();
      },

      loadBottom () {
        this.requestData();
      },
      showDescrip ($event, index) {
        // MessageBox.alert('操作成功!', '提示');
        if (index === '') {
          this.showModel = false;
          return false;
        }
        this.current_articles = (index);
        this.showModel = true;
      },
      overView () {
        return false;
      },
      requestData () {
        Indicator.open('加载中...');
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
          this.articles =response.data.subjects;
          if (this.page === 0) {
            this.$refs.loadmore.onTopLoaded();
            Toast({
              message: '请求成功',
              position: 'bottom'
            });
          } else {
            // this.articles = response.data["subjects"] 也可以
          }
          Indicator.close();
        }, function (response) {
          Indicator.close();
        });
      }
    }
  };
</script>
