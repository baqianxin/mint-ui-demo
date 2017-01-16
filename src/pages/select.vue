<template>
  <div class="home">
    <mt-cell>{{ msg }}</mt-cell>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :autoFill=true :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="member-list" >
        <div class="single-member effect-2"  v-for="product in articles">
          <div class="member-image">
            <img src="../assets/member_270x210.jpg" v-lazy=product.product_img  alt="Member">
          </div>
          <div class="member-info">
            <h3>{{product.product_name}}</h3>
            <h5>类型：{{product.product_type}} / 喜爱：{{product.like_number}}  / 测评：{{product.evl_number}} </h5>
            <p>Description... by oom-cc</p>
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

  function requestData(Vuethis){
    Indicator.open('加载中...');
    Vuethis.$http.jsonp('http://m.tech/index.php?r=knewone/list&page='+Vuethis.page, {
      type: "sydata"
    }, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function(response){
      // 响应成功回调
      Indicator.close();
      Vuethis.refreshData(response.data);
    }, function(response){
      // 响应错误回调
      Indicator.close();
    });
  }
  // mounted 钩子函数  这里去请求豆瓣数据
  export default {
    name: 'home',
    data () {
      return {
        msg: '精选列表',
        page: 0,
        allLoaded: false,
        articles: []
      };
    },
    created: function () {
      requestData(this);
    },
    methods: {
      loadTop () {
        this.page=0;
        requestData(this);
      },

      loadBottom () {
        requestData(this);
      },
      refreshData(data){
        if (data.pageCount<this.page){
          Toast({
            message: '没有更多数据了',
            position: 'bottom'
          });
          return false;
        }
        if (this.page===0) {
          this.articles = Array.from(data.data);
          this.$refs.loadmore.onTopLoaded();
        } else {
          this.articles = this.articles.concat(Array.from(data.data));
        }
        Toast({
          message: '请求成功',
          position: 'bottom'
        });
        this.page=this.page+1;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.member-info p {
  min-width:100%;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
 @import '../assets/css/member-card.css';
</style>
