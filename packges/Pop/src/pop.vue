<template>
  <transition>
    <div :class="['rx-pop',position]" v-show="popShow">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "rxPop",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      popShow: false
    }
  },
  mounted() {
    if (this.value) this.isShow = true;
  },
  methods: {
  },
  computed: {
  },
  watch: {
    'value'(val) {
      this.popShow = val
    },
    'popShow'(val) {
      this.$emit('input', val);
    }
  },
  components: {
  }
}
</script>
<style lang="less">
.rx-pop{
  position: fixed;
  z-index: 2001;
  text-align: center;
  &.top{
    top: 0
  }
}
</style>