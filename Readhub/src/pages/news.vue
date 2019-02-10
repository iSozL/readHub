<template>
  <div class="pages">
    <span v-if="msg!=='jobs'" v-for="item in List" style="float: left">
      <div class="article">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="summary">
          {{ item.summary }}
        </div>
        <div>
          <span class="siteName">
            {{ item.siteName }}
          </span>
          <span class="date">
            {{ item.publishDate }}
          </span>
          <hr style="height: 0.0125rem; width: 38rem;">
        </div>
      </div>
    </span>
    <span v-else v-for="(item, index) in List" style="float: left">
      <div class="article">
        <div class="title">
          {{ item.jobTitle }}
        </div>
        <div class="summary">
          {{ item.jobsArray}}
        </div>
        <div>
          <span class="siteName">
            {{ index }}
          </span>
          <span class="date">
            {{ item.publishDate }}
          </span>
          <hr style="height: 0.0125rem; width: 38rem;">
        </div>
      </div>
    </span>
    <sponsors></sponsors>
  </div>
</template>

<script>
  import sponsors from '../components/sponsors'
  export default {
    name: 'news',
    props: ['List', 'msg'],
    components: {
      sponsors
    },
    methods: {
      handleClick: function (msg) {
        this.$emit('change', msg)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pages
    width 60.6rem
    margin auto
    overflow hidden
  .article
    width 38rem
  .title
    font-size 17px
    margin-top 2rem
    margin-bottom 1rem
  .summary
    font-size 15px
    color #607d8b
    line-height 1.5rem
    margin-bottom .5rem
  .siteName
  .date
    font-size 14.5px
    color #607d8b
    margin-right .6rem
</style>
