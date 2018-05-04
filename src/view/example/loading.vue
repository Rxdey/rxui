<template>
  <div class="page" v-loading.full="isShow">
    <div class="example btn-group">
      <p>Loading</p>
      <rx-button size="large" @click="showToast">点击加载</rx-button>
    </div>
    
    <div class="example btn-group" style="position:relative" v-loading="isShow">
      <p>Loading</p>
      <rx-button size="large" @click="showToast">点击加载</rx-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showToast() {
      this.isShow = true
    }
  },
  watch: {
    'isShow'(to, from) {
      if (this.isShow) {
        setTimeout(() => {
          this.isShow = false;
          // console.log(this.isShow)
        }, 2000);
      }
    }
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
