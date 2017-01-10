<template>
  <div class="tree">
    <nav class='navbar'>
      <ul class='nav nav-stacked'>
        <template v-for='item in menus'>
          <li role='presentation' v-if='!item.children'><a href="#">{{item.text}}</a></li>
          <li role='presentation' v-if='item.children'><a href="#" v-on:click='toggleChildren(item)'>{{item.text}}<span
            class='glyphicon'
            v-bind:class='{ "glyphicon-chevron-right": !item.expanded, "glyphicon-chevron-down": item.expanded }'></span></a>
            <ul v-show='item.expanded' class="childs">
              <li v-for='child in item.children'><a href="#">{{child.text}}</a></li>
            </ul>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    toggleChildren: function (item) {
      item.expanded = !item.expanded;
    }
  },
  data () {
    return {
      menus: [{
        text: '水果',
        expanded: false,
        children: [{
          text: '苹果'
        }, {
          text: '荔枝'
        }, {
          text: '葡萄'
        }, {
          text: '火龙果'
        }]
      }, {
        text: '好吃的',
        expanded: false,
        children: [{
          text: '糖'
        }, {
          text: '面包'
        }, {
          text: '火腿'
        }, {
          text: '薯片'
        }, {
          text: '碎碎面'
        }]
      }, {
        text: '饮料',
        expanded: false,
        children: []
      }]
    };
  }
};

</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
