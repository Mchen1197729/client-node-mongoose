<template>
  <div id="app">
    <div>
      <el-button type="primary" round @click="clickDemo01">demo01</el-button>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      clickDemo01() {
        this.$router.push('/demo01')
      }
    }
  }
</script>
<style lang="less">

</style>
