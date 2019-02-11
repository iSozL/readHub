<template>
  <span class="brief">
    <div>
      行情简报
    </div>
    <div v-for="(item, index) in items" class="message">
      <li>
        {{ item.content }}
      </li>
    </div>
  </span>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'brief',
    data() {
      return {
        items: []
      }
    },
    methods: {
      getInfo3: function (msg) {
        this.msg = msg;
        let _this = this;
        axios.get('https://api.readhub.cn/jobs/brief?lastCursor=&pageSize=50')
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
    width 16.5rem
    display inline-block
    margin-top 2rem
    margin-left 3.1rem
    font-size 17px
    color #607d8b
  .message
    font-size 16px
    color black
    margin-top 2rem
</style>
