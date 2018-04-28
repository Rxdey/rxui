<template>
<transition name="fade">
  <div class="rx-loading" v-show="isShow">
    <div class="rx-loading--icon">
      <i class="rx-icon-loading"></i>
    </div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
  name:'Rxloading',
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {

    }

  },
  components: {

  }
}
</script>

<style lang="less">
@import url('../../style/default.less');
.rx-loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.5s;
  &--icon{
    color: #fff;
    animation: loading 1s linear infinite;
    i{ font-size: 50px;}
  }
}

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
