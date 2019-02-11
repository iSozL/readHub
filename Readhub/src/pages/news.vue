<template>
  <div class="pages">
    <div v-if="msg!=='jobs'">
      <span v-for="item of List" style="float: left">
        <div class="article">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="summary" key="others">
            {{ item.summary }}
          </div>
          <div>
            <span class="siteName">
              {{ item.siteName }}
            </span>
            <span class="date">
            </span>
            <hr style="height: 0.0125rem; width: 38rem;">
          </div>
        </div>
      </span>
      <sponsors></sponsors>
    </div>
      <div v-else>
      <span v-for="item of List" style="float: left">
        <div class="article">
          <div class="title">
            {{ item.jobTitle }}
          </div>
          <div class="summary" v-if="item.jobsArray!==undefined">
            {{ item.jobsArray[0].title }} ·
            {{ item.jobsArray[1].title }} ·
            {{ item.jobsArray[2].title }} ·
            {{ item.jobsArray[3].title }}
          </div>
          <div>
            <span class="siteName" v-if="item.cities!==undefined">
              {{ Object.keys(item.cities)[0] }}、{{ Object.keys(item.cities)[1] }}等地共更新
              {{ item.jobCount }} 个职位,待遇集中在 {{ item.salaryLower }}-{{ item.salaryUpper }} k，
              一般要求 {{ item.experienceLower }}-{{ item.experienceUpper }} 年经验
            </span>
            <hr style="height: 0.0125rem; width: 38rem;">
          </div>
        </div>
      </span>
      <brief></brief>
    </div>
  </div>
</template>

<script>
  import sponsors from '../components/sponsors'
  import brief from '../components/brief'
  export default {
    name: 'news',
    props: ['List', 'msg'],
    components: {
      sponsors, brief
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
