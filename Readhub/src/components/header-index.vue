<template>
  <div>
    <div class="header">
      <logo></logo>
      <span class="nav">
        <span class="nav-items">
          <router-link to="/" exact tag="a">
            热门话题
          </router-link>
          <router-link to="/dynamic" tag="a">
            科技动态
          </router-link>
          <router-link to="/information" tag="a">
            开发者资讯
          </router-link>
          <router-link to="/news" tag="a">
            区块链快讯
          </router-link>
          <router-link to="/recruit" tag="a">
            招聘详情
          </router-link>
        </span>
      </span>
      <login></login>
    </div>
    <hr/>
    <news></news>
  </div>
</template>

<script>
  import logo from '../components/header-logo'
  import login from '../components/login'
  import news from '../pages/news.vue'
  export default {
    name: 'index',
    components: {
      logo,
      login,
      news
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    width 60.6rem
    height 3.87rem
    margin auto
    overflow hidden
  .nav
    margin-top 1.6rem
    margin-left 1.5rem
    display inline-block
    height 2.3rem
    vertical-align: top
  .nav-items
    width 32rem
    display inline-flex
    justify-content space-between
    font-size 17px
    color #607d8b
    a
      text-decoration none
      color #607d8b
    a:hover
      font-weight bold
      color #246394
    a.router-link-exact-active
      font-weight bold
      color #246394
</style>
