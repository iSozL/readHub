<template>
  <div v-if="msg!=='jobs'">
    <hr/>
    <div class="pages">
      <span v-for="item of List" style="float: left">
        <div class="article">
          <span class="title">
            {{ item.title }}
          </span>
          <div class="summary" key="others">
            {{ item.summary }}
          </div>
          <div>
            <span class="siteName">
              {{ item.siteName }}
              <span v-if="item.authorName!==undefined&&item.authorName!==''">/</span>
              {{ item.authorName }}
            </span>
            <span class="date">
              {{ item.publishDate }}
            </span>
            <hr>
          </div>
        </div>
      </span>
      <sponsors></sponsors>
    </div>
  </div>
  <div v-else style="background: #f5f6f7">
    <div class="pages">
      <span style="float: left">
        <div class="job-date">
         {{ List[0].createdAt }}
        </div>
        <div v-for="item of List" >
          <div class="job-article">
            <div class="job-title">
              {{ item.jobTitle }}
            </div>
            <div class="job-summary" v-if="item.jobsArray!==undefined">
              {{ item.jobsArray[0].title }} ·
              {{ item.jobsArray[1].title }} ·
              {{ item.jobsArray[2].title }} ·
              {{ item.jobsArray[3].title }}
            </div>
            <div>
              <span class="job-siteName" v-if="item.cities!==undefined">
                {{ Object.keys(item.cities)[0] }}、{{ Object.keys(item.cities)[1] }}等地共更新
                {{ item.jobCount }} 个职位,待遇集中在 {{ item.salaryLower }}-{{ item.salaryUpper }} k，
                一般要求 {{ item.experienceLower }}-{{ item.experienceUpper }} 年经验
              </span>
            </div>
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
      },
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
    display inline-block
    font-size 17px
    margin-top 2rem
    margin-bottom 1rem
  .summary
    font-size 15px
    color #607d8b
    line-height 1.5rem
    margin-bottom .5rem
  .siteName
    font-size 16px
    color rgba(0, 0, 0, .65)
  .date
    font-size 14.5px
    color #607d8b
    margin-left .6rem
  .job-article
    width 38rem
    height 8.5rem
    margin-bottom 1rem
    background #ffffff
    box-shadow 0 2px 6px -1px rgba(0,0,0,.06)
  .job-title
    display inline-block
    font-size 17px
    margin-top 1.5rem
    margin-bottom .7rem
    margin-left 1.3rem
  .job-date
    margin-top 1rem
    margin-bottom 1rem
    margin-left 1.16rem
    font-size 30px
  .job-summary
    font-size 15px
    color #607d8b
    line-height 1.5rem
    margin-bottom .7rem
    margin-left 1.3rem
  .job-siteName
    font-size 16px
    color rgba(0, 0, 0, .65)
    margin-left 1.3rem
</style>
