<template>
  <div class="page">
    <div class="example btn-group">
      <p>PopUp</p>
      <rx-button size="large" @click="showPop1('top')">顶部pop</rx-button>
      <rx-button size="large" @click="showPop1('bottom')">底部pop</rx-button>
      <rx-button size="large" @click="showPop1('right')">右pop</rx-button>
      <rx-button size="large" @click="showPop1('left')">左pop</rx-button>
    </div>
    <rx-pop v-model="popShow1" :full="full"  :position="position">
      <div class="topIngo">
        <p>顶部消息</p>
        <div class="btn-group" v-show="full">
          <rx-button size="large" type="blue" @click="close">关闭pop</rx-button>
        </div>
      </div>
    </rx-pop>
  </div>
</template>
<script>
export default {
  name: "pop",
  data() {
    return {
      popShow1:false,
      position:'top',
      full:false,
    }
  },
  mounted() {
  },
  methods: {
    showPop1(p) {
      p === 'right'?this.full = true:this.full = false
      this.position = p
      this.popShow1 = !this.popShow1
    },
    close(){
      this.popShow1 = false
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
.page {
  box-sizing: border-box;
  position: relative;
  button {
    font-family: Helvetica Neue, Helvetica, STHeiTi, Arial, sans-serif;
  }
}
.example {
  background: #fff;
  box-sizing: border-box;
  padding: 10px;
  p {
    border-left: 4px solid springgreen;
    padding-left: 10px;
  }
}
.topIngo{
  background: rgb(255, 255, 255);
  height: 100%;
  line-height: 40px;
  p{
    margin: 0
  }
}
</style>