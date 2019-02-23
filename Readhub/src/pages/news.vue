<template>
  <div v-if="msg!=='jobs'">
    <hr/>
    <div class="pages">
      <span v-for="item of List" style="float: left">
        <div class="article">
          <span class="title" v-if="item.url !== undefined">
            <a :href='item.url' target="_blank">{{ item.title }}</a>
          </span>
          <span class="title" v-else>
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
         {{ List[0].createdAt.substr(0, 10) }}
        </div>
        <div v-for="(item, index) of List" :key="item.id">
          <div class="job-article" @click="changeClick(index)">
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

          <div id="details" :class="{change: ind !== index}">
            <div class="describe">
              <br/>
              职位行情
            </div>
            <hr/>
            <div v-if="item.jobsArray!==undefined">
              <div v-for="number of num">
                <a :href="item.jobsArray[number].url" target="_blank">
                  <div class="d-title">
                    {{ item.jobsArray[number].title }} · {{ item.jobsArray[number].company }}
                  </div>
                </a>
                <span class="salary" v-if="item.jobsArray[number].salaryLower==-1">
                  面议
                </span>
                <span class="salary" v-else>
                  {{ item.jobsArray[number].salaryLower }}k - {{ item.jobsArray[number].salaryUpper }}k
                </span>

                <span class="experience" v-if="item.jobsArray[number].experienceLower==-1&&item.jobsArray[number].experienceUpper==-1">
                  经验不限
                </span>
                <span class="experience" v-if="item.jobsArray[number].experienceUpper==-1&&item.jobsArray[number].experienceLower!==-1">
                  {{ item.jobsArray[number].experienceLower }}年以上
                </span>
                <span class="experience" v-if="item.jobsArray[number].experienceUpper>0&&item.jobsArray[number].experienceLower>0">
                    {{ item.jobsArray[number].experienceLower }}年 - {{ item.jobsArray[number].experienceUpper }}年
                </span>

                <span class="city">
                  {{ item.jobsArray[number].city }}
                </span>
                <span class="company">
                  {{ item.jobsArray[number].siteName }}
                </span>
                <hr/>
              </div>
              <div class="wait">
                <br/>
                  查看全部{{ item.jobCount }}个职位,敬请期待
                <pre><br/></pre>
              </div>
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
    data() {
      return {
        num: [0, 1, 2, 3],
        ind: ''
      }
    },
    components: {
      sponsors,
      brief,
    },
    methods: {
      handleClick: function (msg) {
        this.$emit('change', msg)
      },
      changeClick: function (index) {
        if (this.ind === index)
          this.ind = ''
        else
          this.ind = index
      }
    },
  }
</script>

<style lang="stylus" scoped>
  a:hover
    text-decoration underline
  a
    text-decoration none
    color black
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
    margin-top 1rem
    background #ffffff
    box-shadow 0 1px 6px -2px rgba(0, 0, 0, .6)
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
    margin-right .5rem
  .job-siteName
    font-size 16px
    color rgba(0, 0, 0, .65)
    margin-left 1.3rem
  #details
    overflow hidden
    background #ffffff
    box-shadow 0 1px 6px -2px rgba(0, 0, 0, .6)
  .describe
    margin-left 1.3rem
    color #607d9b
    font-size 15px
  .d-title
    margin-top 1rem
    margin-left 2rem
  .salary
    display inline-block
    color #dc143c
    margin-left 2rem
    margin-top .5rem
  .experience
    margin-left .7rem
    color #607d9b
    font-size 15px
  .city
    margin-left 1rem
    color #607d9b
    font-size 15px
  .company
    margin-right 1rem
    color #607d9b
    font-size 15px
    float: right
  .wait
    text-align center
    color #607d9b
  .change
    height 0
</style>
