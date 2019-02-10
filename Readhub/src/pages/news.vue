<template>
  <div class="pages">
    <span v-for="item in List" style="float: left">
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
    <sponsors></sponsors>
  </div>
</template>

<script>
  import axios from 'axios'
  import sponsors from '../components/sponsors'
  export default {
    name: 'news',
    data(){
      return {
        List: []
      }
    },
    components: {
      sponsors
    },
    methods: {
      getInfo: function () {
        let _this = this;
        axios.get('https://api.readhub.cn/blockchain/?lastCursor')
          .then(this.getInfo2)
      },
      getInfo2: function (res) {
        this.List = res.data.data
      }
    },
    mounted() {
      this.getInfo()
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
