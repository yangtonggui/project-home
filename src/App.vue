<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import './themes/index.scss';
#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-family: 'PingFang Medium', '微软雅黑';
}
</style>
