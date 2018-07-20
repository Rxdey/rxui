<template>
  <div class="rx-mask"> </div>
</template>
<script>
export default {
  name: "Mask"
}
</script>
<style lang="less">
.rx-mask{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: rgba(0,0,0,.5)
}
</style>