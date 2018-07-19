<template>
  <div class="page">
    <div class="example btn-group">
      <p>PopUp</p>
      <rx-button size="large" @click="showPop1">顶部pop</rx-button>
    </div>
    <rx-pop v-model="popShow1">
      
    </rx-pop>
  </div>
</template>
<script>
export default {
  name: "pop",
  data() {
    return {
      popShow1:false
    }
  },
  mounted() {
  },
  methods: {
    showPop1() {
      this.popShow1 = !this.popShow1
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
</style>