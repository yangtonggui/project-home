<template>
  <div class="container">
    <ly-head></ly-head>
    <ly-content></ly-content>
  </div>
</template>
<script>
import LyHead from '@/layout/head.vue'
import LyContent from '@/layout/content.vue'

export default {
  name: 'Container',
  data() {
    return {}
  },
  components: {
    LyHead,
    LyContent
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>

