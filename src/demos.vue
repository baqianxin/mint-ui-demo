<template>
  <section class="page-demo">
    <mt-header :title=header fixed></mt-header>
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell
        v-for="item in group.list"
        :to="item.path"
        is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </mt-cell>
      <div class="member-list" >
        <div class="single-member effect-2"  v-for="item in group.list">
          <div class="member-image">
            <img src="./assets/member_270x210.jpg" alt="Member">
          </div>
          <div class="member-info">
            <h3>{{ item.name }}</h3>
            <h5>{{ item.name }}-{{ item.name }}-{{ item.name }}</h5>
            <p>DDDD---DDDD--oomcc</p>
            <div class="social-touch">
              <a class="fb-touch" href="#"></a>
              <a class="tweet-touch" href="#"></a>
              <a class="linkedin-touch" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        header: 'Oom-vue',
        navs: []
      };
    },

    created() {
      this.navs = navs;
    }
  };
</script>

<style>
  .page-demo {
    padding-bottom: 50px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    .member-info {
      text-align:center;
    }
    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
  }
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }

    @component part {
      margin-bottom: 15px;
    }
  }
 @import './assets/css/member-card.css';
</style>
