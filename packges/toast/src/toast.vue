<template>
  <transition name="alert">
    <div class="rx-toast" :class="[type,size,position]" v-if="isShow">
      <i :class="'rx-icon-'+type"></i>
      <span>{{message}}</span>
      <!-- <i class="icon icon-close"></i> -->
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow: false,
      message: '',
      type: '',
      size:'small',
      position:'middle'
    }

  },
   watch: {
    'isShow' (to, from) {
      let timeout
      if (to) {
        timeout = setTimeout(() => {
          this.isShow = false
        }, 2000)
      } else {
        clearTimeout(timeout)
      }
    }
  }
}
</script>

<style lang="less">
@import url('../../style/default.less');
  .rx-toast {
    z-index: 2000;
    position: fixed;
    padding: 10px 15px;
    background: rgba(0,0,0,.7);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    left: 50%;
    min-width: 96px;
    transform: translate(-50%,-50%);
    opacity: 1;
    transition: 0.5s;
    &.middle{top: 50%;}
    &.top{top: 10%}
    &.bottom{top: 80%}
    &.large {
      padding: 20px 10px;
      font-size: 18px;
      i{margin:0 0 10px 0;font-size: 40px}
      i,span{
        display: block;
        text-align: center;
      }
    }
  }
  .alert-enter-active,
  .alert-leave-active {
    opacity: 1;
  }
  .alert-enter,
  .alert-leave-to {
    opacity: 0;
  }
  .rx-icon-info{margin-right: 3px}
</style>
