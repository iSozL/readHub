<template>
  <div>
    <div class="header">
      <logo></logo>
      <items @change="getInfo"></items>
      <login></login>
    </div>
    <hr/>
    <news :List="List" :msg="msg"></news>
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
      items
    },
    data() {
      return {
        List: [],
        msg: '',
        jobs:[]
      }
    },
    methods: {
      getInfo: function (msg) {
        this.msg = msg;
        let _this = this;
        axios.get('https://api.readhub.cn/' + msg + '?lastCursor=&pageSize=200')
          .then(this.getInfo2)
      },
      getInfo2: function (res) {
        let _this = this;
        _this.List = res.data.data;
      }
    },
    mounted() {
      let _this = this;
      axios.get('https://api.readhub.cn/topic?lastCursor=&pageSize=100')
        .then(this.getInfo2)
      },
      getInfo2: function (res) {
        this.List = res.data.data
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
