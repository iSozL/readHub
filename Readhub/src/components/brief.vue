<template>
  <span class="brief">
    <div style="margin-bottom: .85rem">
      行情简报
    </div>
    <div class="article">
      <div class="time">
        <p v-if="items[0]!==undefined">
          最近更新:{{ items[0].date }}
        </p>
      </div>
      <hr>
      <div v-for="(item,index) in items" v-if="index<=41" class="message">
        <li class="card">
          <span>
            {{ item.content }}
          </span>
        </li>
      </div>
    </div>
  </span>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'brief',
    data() {
      return {
        items: [],
        timestamp: ''
      }
    },
    methods: {
      getInfo3: function (msg) {
        this.timestamp = Date.parse(new Date())
        this.msg = msg;
        let _this = this;
        axios.get('https://api.readhub.cn/jobs/brief?lastCursor=' + this.timestamp + '&pageSize=20')
          .then(this.getInfo4)
      },
      getInfo4: function (res) {
        let _this = this;
        _this.items = res.data.data;
      }
    },
    mounted() {
      this.getInfo3()
    }
  }
</script>

<style lang="stylus" scoped>
  .brief
    float top
    width 17.5rem
    display inline-block
    margin-left 3.1rem
    margin-top 2rem
    font-size 17px
    color #607d8b
  .message
    font-size 15px
    color black
  .article
    background #ffffff
    box-shadow 0 2px 6px -1px rgba(0,0,0,.06)
  .card
    list-style circle
    margin-left 1.2rem
    margin-right 1.2rem
    margin-bottom 2rem
    span
      font-size 15px
      color black
      letter-spacing .02rem
  li
    color #607d8b
    font-size 17px
  .time
    text-align center
    p
      font-size 17px;
      color rgba(0,0,0,.66);
      margin-bottom 1rem
      margin-top 1.5rem
      display inline-block
      vertical-align middle
  hr
    width 15rem
    border-top:3px double #f5f6f7
    margin-bottom: 1.8rem

</style>
