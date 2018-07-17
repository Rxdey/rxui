<template>
  <div class="scroller" ref="scroller">
    <Scroll :height="height">
      <ul class="list">
        <li v-for="item in list" @click="listClick" :key="item">{{item}}</li>
      </ul>
    </Scroll>
  </div>
</template>
<script>
export default {
  name: "scroller",
  data() {
    return {
      height:0,
      list:[]
    }
  },
  mounted() {
    this.height = this.$refs.scroller.clientHeight;
    for(let i=0;i<50;i++){
      this.list.push(i+1)
    }
  },
  methods: {
    listClick(){
      console.log('list')
    }
  },
  computed: {
  },
  watch: {
  },
  components: {
  }
}
</script>
<style lang="less">
.scroller{
  flex: 1;
  overflow: hidden;
  .list{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      width: 100%;
      padding: 10px 15px;
      background: #f7f7f7;
      border-bottom: 1px solid #ddd;
      &:active{
        background: #fff
      }
    }
  }
}
</style>