<template>
  <div class="ly-content">
    <router-view></router-view>
  </div>
</template>
<script>
const name = 'Content'
export default {}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
