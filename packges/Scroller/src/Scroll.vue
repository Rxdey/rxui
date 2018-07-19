<template>
  <div class="rx-scroller" ref="scroller">
    <div class="rx-scroller--content" ref="content" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :class="{animated:animated}" :style="{transform:'translateY('+moveY+'px)'}">
      <div class="pull-down" v-show="isPullDown">
        <i class="rx-icon-loading"></i>
      </div>
      <slot></slot>
      <div class="pull-up" v-show="isPullUp">
        <!-- <i class="rx-icon-loading"></i> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Scroll",
  props: {
    height: {    // 滚动高度
      type: Number,
      default: 0
    },
    speed: {    // 滚动速度
      type: Number,
      default: 150
    },
    isPullUp: {
      type: Boolean,
      default: false
    },
    isPullDown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      contentHeight: 0, // 内容高度
      isHeight: false,  // 内容高度大于滚动高度
      fullHeight: 0,
      position: {
        startY: 0,
        lastY: 0,
        nowY: 0,
        lastTime: 0,
        start: 0
      },
      animated: false,
      moveY: 0,
      isTouch: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.contentHeight = this.$refs.content.clientHeight;
      this.isHeight = this.contentHeight >= this.height
      this.fullHeight = this.contentHeight - this.height
    })
  },
  methods: {
    touchStart(event) {
      // event.preventDefault();
      // console.dir(event.target)
      // this.isTouch = true;
      let tans = this.$refs.content.style.transform;
      this.position.lastY = parseInt(tans.replace(/[^0-9\-,]/g, ''));  // 获取上次坐标
      this.position.startY = event.touches[0].clientY - this.position.lastY;  // 计算初始坐标
      this.position.start = event.touches[0].clientY;
      this.animated = false;
      this.position.lastTime = Date.now();
    },
    touchMove(event) {
      event.preventDefault();
      if (this.isTouch) return
      this.position.nowY = event.touches[0].clientY
      let speed = this.position.nowY - this.position.startY
      this.moveY = this.moveY >= 0 || this.moveY <= -(this.contentHeight - this.height + 20) ? speed = parseInt((speed - this.position.lastY) * 0.4) + this.position.lastY : speed
    },
    touchEnd(event) {
      // event.preventDefault();
      let distance = event.changedTouches[0].pageY - this.position.start;
      let endDate = Date.now() - this.position.lastTime;
      let speed = (parseInt(distance) / endDate) * this.speed;
      let tran = this.moveY + parseInt(speed);
      this.animated = true;
      let pullDown = this.isPullDown ? 50 : 0
      let pullUp = this.isPullUp ? -this.fullHeight - 50 : -this.fullHeight
      if (tran >= pullDown) {
        tran = pullDown
        if (this.isPullDown) {
          this.onPullDown()
        }
      } else if (tran < pullDown && tran >= 0) {
        tran = 0
      }
      if (tran <= pullUp && tran < 0) {
        this.isHeight ? pullUp : pullUp = 0
        tran = pullUp
        if (this.isPullUp) {
          this.onPullUp()
        }
      }
      this.moveY = tran
    },
    onPullDown() {
      // this.isTouch = true
      this.$emit('onPullDown')
    },
    onPullUp() {
      // this.isTouch = true
      this.$emit('onPullUp')
    },
    pullDownReset() {
      this.moveY = 0;
    },
    pullUpReset() {
      this.moveY = this.isHeight?-this.fullHeight:0;
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
@import url("../../style/default.less");
.rx-scroller {
  position: relative;
  .pull-down {
    text-align: center;
    position: absolute;
    top: -50px;
    left: 0;
    line-height: 50px;
    width: 100%;
    height: 50px;
  }
  .pull-up {
    text-align: center;
    position: absolute;
    bottom: -50px;
    left: 0;
    line-height: 50px;
    width: 100%;
    height: 50px;
  }
}
.animated {
  transition: 0.4s cubic-bezier(0.1, 0.57, 0.1, 1);
  // transition: 0.3s;
}
.rx-icon-loading {
  animation: loading 1s linear infinite;
  display: inline-block;
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