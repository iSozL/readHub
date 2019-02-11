<template>
  <span class="logo">
    <router-link to="/" tag="a">
      <img src="@/assets/logo.png">
    </router-link>
  </span>
</template>

<script>
  export default {
    name: 'logo',
    data() {
      return {
        msg: 'Readhub'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .logo
    img
      margin-top .65rem
      margin-bottom .65rem
      width 8rem
      height 2.3rem
</style>
