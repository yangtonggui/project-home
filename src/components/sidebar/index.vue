<template>
  <div class="sidebar">
    <i-menu accordion @on-select="gotoExample" v-model="currentName">
      <template v-for="item in menuData">
        <submenu v-if="!item.children" :key="item.label" :name="item.name">
          <template slot="title">
            <img :src="getMenuImage(item)" />
            {{item.label }}
          </template>
          <menu-item :name="item.name">
            &bull;
            <a v-on:click="gotoExample(item.name)">{{item.label }}</a>
          </menu-item>
        </submenu>

        <submenu v-if="!!item.children" :key="item.label" :name="item.name">
          <template slot="title">
            <img :src="getMenuImage(item)" />
            {{item.label }}
          </template>
          <menu-item v-for=" child in item.children" :key="child.label" :name="child.name">
            &bull;
            <a v-on:click="gotoExample(child.name)">{{child.label}}</a>
          </menu-item>
        </submenu>
      </template>
    </i-menu>
  </div>
</template>
<script>
import { Menu, MenuItem, Submenu } from 'iview'
const name = 'Sidebar'
export default {
  name,
  props: {
    menuType: {
      type: String,
      defalut() {
        return ''
      }
    },
    menuData: {
      type: Array,
      defalut() {
        return []
      }
    }
  },
  data() {
    return {
      currentName: 'globe'
    }
  },
  components: {
    iMenu: Menu,
    MenuItem,
    Submenu
  },

  methods: {
    getMenuImage(item) {
      return global.config.url[this.menuType + '-examples'] + '/images/menu/' + item.name + '_b.png'
    },
    gotoExample(name) {
      this.$emit('on-selected', name)
    }
  }
}
</script>

<style lang="scss" >
.sidebar {
  .ivu-menu {
    width: 80% !important;
    color: #646974;
    margin: 0 auto;
  }
  .ivu-menu-submenu {
    margin: 20px 0;
  }
  .ivu-menu-item {
    padding: 0 !important;
    margin-top: 20px;
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    content: '';
    width: 0 !important;
  }
  .ivu-menu-submenu-title {
    padding: 8px 24px;
  }
  .ivu-menu-submenu-title,
  .ivu-menu-light > .ivu-menu-item {
    height: 40px;
    background: rgba(234, 239, 249, 1);
    border-radius: 20px;
  }
  .ivu-menu-submenu-title:hover {
    background: #396ae2;
    color: rgba(234, 239, 249, 1);
  }
  .ivu-menu-light > .ivu-menu-item:hover {
    background: #396ae2;
    color: rgba(234, 239, 249, 1) !important;
  }
  .ivu-menu-opened > .ivu-menu-submenu-title {
    background: #396ae2 !important;
    color: rgba(234, 239, 249, 1);
  }
  .ivu-menu-item-active > a {
    color: #396ae2 !important;
  }
  .ivu-menu-item-active {
    background: rgb(255, 255, 255) !important;
  }
  .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    background: rgb(255, 255, 255) !important;
  }
}
</style>
<style lang="scss" scoped>
.sidebar {
  width: 300px;
  overflow-x: hidden;
  position: relative;
  background: rgb(255, 255, 255);
  box-shadow: 4px 0px 4px rgba(122, 122, 122, 0.2);
  img {
    height: 17px;
    width: 16px;
    transform: translate(-10%, 20%);
  }
  a {
    margin-left: 10px;
    display: inline-block;
    text-decoration: none;
    outline: none;
    color: #646974;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-family: 'PingFang SC';
  }
}
</style>
