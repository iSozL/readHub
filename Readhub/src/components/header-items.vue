<template>
  <span class="nav">
    <span class="nav-items">
      <a v-for="item of items" @click="handleClick(item.msg)">
        {{ item.title }}
      </a>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'header-items',
    data() {
      return {
        items: [
          {
            title: '热门话题',
            msg: 'topic'
          },
          {
            title: '科技动态',
            msg: 'news',
          },
          {
            title: '开发者资讯',
            msg: 'technews'
          },
          {
            title: '区块链快讯',
            msg: 'blockchain',
          },
          {
            title: '招聘详情',
            msg: 'jobs',
          }
        ]
      }
    },
    methods: {
      handleClick: function (msg) {
        this.$emit('change', msg)
      }
    }
  }
</script>

<style lang="stylus" scoped>
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
</style>
