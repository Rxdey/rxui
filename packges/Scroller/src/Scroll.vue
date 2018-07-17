<template>
  <div class="rx-scroller" ref="scroller" :class="{animated:animated}" :style="{transform:'translateY('+moveY+'px)'}">
    <div class="rx-scroller--content" ref="content" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
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
        start:0
      },
      animated: false,
      moveY: 0
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
      let tans = this.$refs.scroller.style.transform;
      this.position.lastY = parseInt(tans.replace(/[^0-9\-,]/g, ''));  // 获取上次坐标
      this.position.startY = event.touches[0].clientY - this.position.lastY;  // 计算初始坐标
      this.position.start = event.touches[0].clientY;
      this.animated = false;
      this.position.lastTime = Date.now();
    },
    touchMove(event) {
      // event.preventDefault();
      this.position.nowY = event.touches[0].clientY
      let speed = this.position.nowY - this.position.startY
      this.moveY = this.moveY >= 0 || this.moveY <= -(this.contentHeight - this.height + 20) ? speed = parseInt((speed - this.position.lastY) * 0.5) + this.position.lastY : speed
    },
    touchEnd(event) {
      // event.preventDefault();
      let distance = event.changedTouches[0].pageY - this.position.start;
      let endDate = Date.now() - this.position.lastTime;
      let speed = (parseInt(distance) / endDate) * this.speed;
      let tran = this.moveY + parseInt(speed);
      this.animated = true;
      // if (tran > 0 || tran <= -this.fullHeight) {
      //   tran = this.moveY > 0 || !this.isHeight ? 0 : -(this.fullHeight);
      // }
      if (tran >= 0) {
        tran = 0
      }
      if (tran <= -this.fullHeight && this.isHeight) {
        tran = -this.fullHeight
      }
      this.moveY = tran
    },
    inertia() {
    },
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
.rx-scroller {
  &.animated {
    transition: 0.3s cubic-bezier(0.1, 0.57, 0.1, 1);
    // transition: 0.3s;
  }
}
</style>