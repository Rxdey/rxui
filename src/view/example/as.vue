<template>
  <div class="page">
    <div class="example btn-group">
      <p>Action Sheet</p>
      <rx-button size="large" @click="showToast">Action Sheet</rx-button>
    </div>
    <ActionSheet v-model="isShow" :menu="menuLists" :isMask="false" @menuClick="menuClick" :autoToClose="false"></ActionSheet>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow:false,
      menuLists:[
        {
          value:1,
          label:'确定',
          type:'default'
        },
        {
          value:2,
          label:'分享',
          type:'green'
        },
        {
          value:3,
          label:'删除',
          type:'red'
        },
        {
          value:4,
          label:'警告',
          type:'yellow'
        },
      ]
    }
  },
  methods: {
    menuClick({index,item}){
      this.$toast.info('点击了'+item.label,'top')
      if(index === 2){
        this.$store.commit('updateLoading',true)
      setTimeout(() => {
        this.$store.commit('updateLoading',false)
        this.isShow = false
      }, 1000);
      }else{
        this.isShow=false
      }
    },
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
