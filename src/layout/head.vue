<template>
  <div class="ly-head" ref="head">
    <div class="title" @click="gotoHome">
      <Row>
        <i-Col :xs="0" :xl="5">
          <span class="logo"></span>
        </i-Col>
        <i-Col :xs="5" :xl="0">
          <svg-icon icon-class="dropmenu" class-name="dropmenu" @on-click="showMenu"></svg-icon>
        </i-Col>G.Space
      </Row>
    </div>
    <div class="menu">
      <Row>
        <i-Col :xs="0" :xl="24">
          <template>
            <Menu @on-select="gotoPage" style="cursor:pointer" mode="horizontal" theme="dark">
              <template v-for="(item,index) in menuData ">
                <MenuItem v-if="item.children&&item.children.length===0" :name="item.path" :key="index">{{item.label}}</MenuItem>
                <Submenu v-else :name="item.path" :class="item.path" :key="index">
                  <template slot="title">{{item.label}}</template>
                  <MenuItem v-for="chird in item.children " :name="chird.path" :key="chird.path">{{chird.label}}</MenuItem>
                </Submenu>
              </template>
            </Menu>
          </template>
        </i-Col>
      </Row>
    </div>
    <div class="tools">
      <Row>
        <i-Col :xs="24" :sm="{ span: 24 }">
          <span class="login">登录</span>
        </i-Col>
      </Row>
    </div>
    <Drawer placement="left" class="s-menu-container" :closable="false"  v-model="drawerVisible">
      <!-- <Row>
        <i-Col :xs="24" :xl="0"> -->
          <template>
            <Menu @on-select="gotoPage" class="s-menu">
              <template v-for="(item,index) in menuData ">
                <MenuItem v-if="item.children&&item.children.length===0" :name="item.path" :class="item.path" :key="index">{{item.label}}</MenuItem>
                <Submenu v-else :name="item.path" :class="item.path" :key="index">
                  <template slot="title">{{item.label}}</template>
                  <MenuItem v-for="chird in item.children " :name="chird.path" :key="chird.path">{{chird.label}}</MenuItem>
                </Submenu>
              </template>
            </Menu>
          </template>
       <!--  </i-Col>
      </Row> -->
    </Drawer>

  </div>
</template>
<script>
const name = 'Head'
export default {
  name,
  data() {
    return {
      drawerVisible: false,
      menuData: []
    }
  },
  methods: {
    showMenu() {
      this.drawerVisible = true
    },
    gotoHome() {
      this.$router.push('/')
    },
    gotoPage(name) {
      if (!name) {
        return
      }

      let selectItem = undefined
      this.menuData.forEach(item => {
        if (item.path === name) {
          selectItem = item
        }
        if (item.children && item.children.length) {
          item.children.forEach(child => {
            if (child.path === name) {
              selectItem = child
            }
          })
        }
      })
      if (selectItem && selectItem.link) {
        window.open(selectItem.link)
      } else if (selectItem && !selectItem.link) {
        this.$router.push(selectItem.target)
      }
      this.drawerVisible = false
    }
  },
  mounted() {
    this.menuData = global.config.menu
  }
}
</script>
<style lang="scss" >
.ly-head {
  .menu {
    .ivu-menu {
      background: rgba(0, 0, 0, 0);
    }
    .ivu-menu-item,
    .ivu-menu > li {
      font-size: 17px;
      margin-right: 35px;
      color: rgba(255, 251, 254, 1) !important;
    }
    .ivu-select-dropdown .ivu-menu-drop-list > .ivu-menu-item {
      color: #426cd9 !important;
    }
  }
}
.s-menu-container {
  .ivu-drawer-content{
    width: auto;
  }
  .ivu-drawer-body {
    background: #2b4cc1;
    overflow: hidden;
    width: auto;
    
    .ivu-menu {
      color: #fff;
    }
    .ivu-menu-item,
    .ivu-menu > li {
      font-size: 17px;
    }
    .s-menu {
      background: rgba(0, 0, 0, 0);

      .ivu-menu-item-selected {
        color: #ff0000;
        background: rgba(0, 0, 0, 0);
      }
    }

    .ivu-menu-vertical .ivu-menu-submenu-title-icon {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>


<style lang="scss" scoped>
.ly-head {
  position: absolute;
  z-index: 1;
  height: 60px;
  width: 100%;
  background: linear-gradient(to right, #396ae2, #2b4cc1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  padding: 0 3%;
  .title {
    user-select: none;
    display: inline-block;
    width: 200px;
    height: 45px;
    font-size: 24px;
    cursor: pointer;
    .dropmenu {
      width: 35px;
      height: 35px;
    }
    .i-Col {
      display: inline-block;
    }
    .logo {
      display: inline-block;
      height: 30px;
      margin-right: 20px;
      width: 30px;
      background: url('../assets/images/home/headlogo.png');
      background-size: 30px;
      transform: translate(0, 20%);
    }
  }

  .tools {
    display: inline;
    // width: 100px;
    font-size: 16px;
    span {
      cursor: pointer;
    }
    /* .login {
      margin-left: 60px;
    } */
  }
}
</style>
