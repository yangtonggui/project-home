<template>
  <div class="docs">
    <iframe :src="getPageUrl()" class="innerpage "></iframe>
  </div>
</template>

<script>
const name = 'Docs'
export default {
  name,
  methods: {
    getPageUrl() {
      return `${global.config.url.base}/docs/${this.$route.name}/`
    }
  }
}
</script>

<style lang="scss" scoped>
.docs {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 60px;
  .innerpage {
    width: 100%;
    height: 100%;
  }
}
</style>
