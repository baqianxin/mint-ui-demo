<template>
  <div id="contain">
    <img src="./assets/logo.png">
    <div class="page-toast">
      <Mityped></Mityped>
      <MEchartsPi></MEchartsPi>
      <div class="page-toast-wrapper">
        <mt-button @click.native="openToast" size="large">Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
      </div>
    </div>
    <mt-cell
      title=""
      to="//oom-cc.com"
      is-link
      value="oom-cc">
    </mt-cell>
    <hello></hello>
  </div>
</template>
<script type="text/babel">
  import {Toast} from 'mint-ui';
  import Hello from './components/Hello';
  import Mityped from './components/Mityped';
  import MEchartsPi from './components/MEchartsPi';

  export default {
    components: {
      Hello,
      Mityped,
      MEchartsPi
    },
    mounted (){
      console.log('App');
    },
    methods: {
      openToast () {
        Toast('Message');
      },

      openToastWithIcon () {
        Toast({
          message: 'Success',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast () {
        Toast({
          message: 'Toast',
          position: 'bottom'
        });
      }
    }
  };
  // ,
  // {
  //   "path": "/toast",
  //   "name": "Toast",
  //   "icon": "toast"
  // },
  // {
  //   "path": "/indicator",
  //   "name": "Indicator",
  //   "icon": "indicator"
  // },
  // {
  //   "path": "/pull-down",
  //   "name": "Pull down",
  //   "icon": "pull-down"
  // },
  // {
  //   "path": "/pull-up",
  //   "name": "Pull up",
  //   "icon": "pull-up"
  // },
  // {
  //   "path": "/infinite-scroll",
  //   "name": "Infinite scroll",
  //   "icon": "infinite-scroll"
  // },
  // {
  //   "path": "/message-box",
  //   "name": "Message box",
  //   "icon": "message-box"
  // },
  // {
  //   "path": "/action-sheet",
  //   "name": "Action sheet",
  //   "icon": "action-sheet"
  // },
  // {
  //   "path": "/popup",
  //   "name": "Popup",
  //   "icon": "popup"
  // },
  // {
  //   "path": "/swipe",
  //   "name": "Swipe",
  //   "icon": "swipe"
  // },
  // {
  //   "path": "/lazyload",
  //   "name": "Lazy load",
  //   "icon": "lazyload"
  // },
  // {
  //   "path": "/range",
  //   "name": "Range",
  //   "icon": "range"
  // },
  // {
  //   "path": "/progress",
  //   "name": "Progress",
  //   "icon": "progress"
  // },
  // {
  //   "path": "/picker",
  //   "name": "Picker",
  //   "icon": "picker"
  // },
  // {
  //   "path": "/datetime-picker",
  //   "name": "Datetime Picker",
  //   "icon": "time"
  // },
  // {
  //   "path": "/index-list",
  //   "name": "Index List",
  //   "icon": "alphabet"
  // },
  // {
  //   "path": "/palette-button",
  //   "name": "Palette Button",
  //   "icon": "alphabet"
  // }
  //,
  //  {
  //    "title": "CSS Components",
  //    "list": [
  //      {
  //        "path": "/header",
  //        "name": "Header",
  //        "icon": "header"
  //      },
  //      {
  //        "path": "/tabbar",
  //        "name": "Tabbar",
  //        "icon": "tabbar"
  //      },
  //      {
  //        "path": "/navbar",
  //        "name": "Navbar",
  //        "icon": "navbar"
  //      },
  //      {
  //        "path": "/button",
  //        "name": "Button",
  //        "icon": "button"
  //      },
  //      {
  //        "path": "/cell",
  //        "name": "Cell",
  //        "icon": "cell"
  //      },
  //      {
  //        "path": "/cell-swipe",
  //        "name": "Cell Swipe",
  //        "icon": "cell"
  //      },
  //      {
  //        "path": "/spinner",
  //        "name": "Spinner",
  //        "icon": "spinner"
  //      },
  //      {
  //        "path": "/tab-container",
  //        "name": "TabContainer",
  //        "icon": "panel"
  //      },
  //      {
  //        "path": "/search",
  //        "name": "Search",
  //        "icon": "searchbar"
  //      }
  //    ]
  //  },
  //  {
  //    "title": "Form Components",
  //    "list": [
  //      {
  //        "path": "/switch",
  //        "name": "Switch",
  //        "icon": "switch"
  //      },
  //      {
  //        "path": "/checklist",
  //        "name": "Checklist",
  //        "icon": "checklist"
  //      },
  //      {
  //        "path": "/radio",
  //        "name": "Radio",
  //        "icon": "radio"
  //      },
  //      {
  //        "path": "/field",
  //        "name": "Field",
  //        "icon": "field"
  //      },
  //      {
  //        "path": "/badge",
  //        "name": "Badge",
  //        "icon": "badge"
  //      }
  //    ]
  //  }
</script>


<style>
#contain {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
