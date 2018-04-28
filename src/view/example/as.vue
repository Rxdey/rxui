<template>
  <div class="page">
    <div class="example btn-group">
      <p>Action Sheet</p>
      <rx-button size="large" @click="showToast">Action Sheet😄</rx-button>
    </div>
    <ActionSheet v-model="isShow"></ActionSheet>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    showToast() {
      this.isShow=true
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
