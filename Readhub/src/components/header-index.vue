<template>
  <div>
    <div class="header">
      <logo></logo>
      <items @change="getInfo"></items>
      <login></login>
    </div>
    <div>
      <news :List="List" :msg="msg"></news>
      <div v-show="!loading">
        Loading。。。。。。
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import logo from '../components/header-logo'
  import login from '../components/login'
  import news from '../pages/news.vue'
  import items from '../components/header-items'

  export default {
    name: 'index',
    components: {
      logo,
      login,
      news,
      items,
    },
    data() {
      return {
        List: [],
        msg: '',
        jobs:[],
        timestamp: '',
        loading: true
      }
    },
    methods: {
      getInfo (msg) {
        this.msg = msg
        //获取msg实现数据分类
        this.timestamp = Date.parse(new Date())
        axios.get('https://api.readhub.cn/'
          + this.msg + '?lastCursor='
          + this.timestamp
          + '&pageSize=10')
          .then(res => {
            if (res.status === 200) {
              this.List = res.data.data
            }
          }).catch((error) => {
          console.log(error)
        })
      },

      //获取更多数据
      scroll () {
        let marginBot = 0;
        //判断滚动条是否滑到底部
        if (document.documentElement.scrollTop){
          marginBot = document.documentElement.scrollHeight
            - (document.documentElement.scrollTop+document.body.scrollTop)
            -document.documentElement.clientHeight;
        } else {
          marginBot = document.body.scrollHeight
            - document.body.scrollTop
            - document.body.clientHeight;
        }

        //如果滑到底层,获取更多数据
        if(marginBot<=0) {
          this.load()
          this.loading = false
        }
      },

      load () {
        if (this.loading) {
          if (this.msg!=='topic') {
            //获取时间戳并转化为毫秒
            let time = JSON.stringify(this.List[this.List.length-1].publishDate)
            let b = JSON.parse(time)
            let d = new Date(b)
            let times = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            this.timestamp = Date.parse(times)
            axios.get('https://api.readhub.cn/'
              + this.msg + '?lastCursor='
              + this.timestamp
              + '&pageSize=10')
              .then(res => {
                if (res.status === 200) {
                  this.List = [...this.List, ...res.data.data]
                  this.loading = true
                }
              }).catch((error) => {
              console.log(error)
              this.loading = true
            })
          } else {
            axios.get('https://api.readhub.cn/'
              + this.msg + '?lastCursor='
              + this.List[this.List.length-1].order
              + '&pageSize=10')
              .then(res => {
                if (res.status === 200) {
                  this.List = [...this.List, ...res.data.data]
                  this.loading = true
                }
              }).catch((error) => {
              console.log(error)
              this.loading = true
            })
          }
        }
      }
    },
    created () {
      this.getInfo
    },

    mounted() {
      this.getInfo('topic')
      window.onscroll = this.scroll
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    width 60.6rem
    height 3.87rem
    margin auto
    overflow hidden
</style>
