<template>
  <transition name="alert">
    <div class="rx-toast" :class="type" v-if="isShow">
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
      type: 'info'
    }

  },
   watch: {
    'isShow' (to, from) {
      let timeout
      if (to) {
        timeout = setTimeout(() => {
          this.isShow = false
        }, 3000)
      } else {
        clearTimeout(timeout)
      }
    }
  }
}
</script>

<style lang="less">
@import url("../../../src/style/var.less");
  .rx-toast {
    position: fixed;
    padding: 15px 15px 15px 20px;
    background: #f7f7f7;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #847f7f;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    min-width: 380px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    transition: 0.5s;
    &.success {
      border: 1px solid darken(@color-green, -30%);
      color: darken(@color-green, 0%);
      background: darken(@color-green, -40%);
    }
    &.error {
      border: 1px solid darken(@color-red, -25%);
      color: darken(@color-red, 0%);
      background: darken(@color-red, -35%);
    }
    &.warning {
      border: 1px solid darken(@color-yellow, -40%);
      color: darken(@color-yellow, 0%);
      background:darken(@color-yellow, -45%);
    }
  }
  .alert-enter-active,
  .alert-leave-active {
    top: 20px;
  }
  .alert-enter,
  .alert-leave-to {
    opacity: 0;
    top: -20px;
  }
  .rx-icon-info{margin-right: 5px}
</style>
