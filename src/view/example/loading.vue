<template>
  <div class="page">
    <div class="example btn-group">
      <p>Loading</p>
      <rx-button size="large" @click="showToast">点击加载</rx-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  methods:{
    showToast(){
      console.log(1)
    }
  }
}
</script>

<style scoped lang="less">
.page{box-sizing: border-box;position: relative;
button{
   font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
}
}
.example{background: #fff;box-sizing: border-box;padding: 10px;
p{border-left: 4px solid springgreen;padding-left: 10px}
}
</style>
