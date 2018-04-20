<template>
  <div class='home'>
  <!-- <rx-button @btnclick="handleclick" type="red" size='small'>确定</rx-button> -->
  <!-- <rx-button @click="handleclick" type="green">确定</rx-button> -->
  <!-- <rx-button @click="handleclick" type="yellow">确定</rx-button> -->
  <!-- <rx-button @click="handleclick" type="blue">确定</rx-button> -->
  <rx-button @btnclick="handleclick">确定</rx-button>

  <!-- <button @click="handleclick">1233</button> -->
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
  data() {
    return {
      message:1
    }
  },
  methods: {
    handleclick(){
      console.log(1)
    }
  }
}
</script>

<style scoped lang="less">

 
</style>
