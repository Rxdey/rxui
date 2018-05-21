<template>
  <div class="page" v-loading.full="isShow">
    <div class="example btn-group">
      <p>Loading</p>
      <rx-button size="large" @click="showToast">点击加载</rx-button>
    </div>
    
    <div class="example btn-group" style="position:relative" v-loading="isShow1">
      <p>Loading</p>
      <rx-button size="large" @click="showToast1">点击加载</rx-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow: false,
      isShow1: false
    }
  },
  methods: {
    showToast() {
      this.isShow = true
      setTimeout(() => {
          this.isShow = false;
        }, 2000);
    },
    showToast1() {
      this.isShow1 = true
      setTimeout(() => {
          this.isShow1 = false;
        }, 2000);
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="less">
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
</style>
