<template>
  <button class="rx-btn" @click="handleClick" :class="['rx-btn'+'--'+type,size!=='normal'&&'rx-btn--'+size,disabled&&'is-disabled',loading&&'is-loading']" :disabled="disabled">
    <i v-if="loading" class="rx-icon-ref"></i>
    <i v-else-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'RxButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed:{

  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    handleInnerClick(evt) {
      if (this.disabled) {
        evt.stopPropagation();
      }
    }
  }

}
</script>

<style scoped lang="less">
@import url("../../../src/style/var.less");
@font-size:16px;
.mix-btn(@backColor,@color,@fontcolor) {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: @font-size;
  background: @backColor;
  border: 1px solid @color;
  color: @fontcolor;
  cursor: pointer;
  text-align: center;
  outline: none;
}
.is-disabled(@backColor,@color){
  background: @backColor;
  border: 1px solid fade(@color,40%);
  background: fade(@backColor,70%);
  cursor: not-allowed;
  &:active,
  &:hover { opacity: 1; }
}
.rx-btn ~ .rx-btn {
  margin: 5px;
}
.rx-btn {
  &:active, &:hover { opacity: 0.85; }
  i{
    font-size: @font-size;
    margin-right: 5px
  }
  &--default {
    .mix-btn(#fff,#ddd,#444);
    &:active, &:hover { background: #eee; }
    &.is-disabled,&.is-loading{
      .is-disabled(#fff,#ddd);
      color: #988f8f;
      &:active, &:hover { background: #fff; }
    }

  }
  &--red {
    .mix-btn(@color-red,@color-red,#fff);
    &.is-disabled,&.is-loading{
      .is-disabled(@color-red,@color-red);
    }
  }
  &--blue {
    .mix-btn(@color-blue,@color-blue,#fff);
    &.is-disabled,&.is-loading{
      .is-disabled(@color-blue,@color-blue);
    }
  }
  &--green {
    .mix-btn(@color-green,@color-green,#fff);
    &.is-disabled,&.is-loading{
      .is-disabled(@color-green,@color-green);
    }
  }
  &--yellow {
    .mix-btn(@color-yellow,@color-yellow,#fff);
    &.is-disabled,&.is-loading{
      .is-disabled(@color-yellow,@color-yellow);
    }
  }
  &--large {
    display: block;
    width: 100%;
  }
  &--small {
    padding: 5px 10px;
    font-size: 12px;
    i{
    font-size: 12px
    }
  }
  &.is-loading{
    .rx-icon-ref{
      animation: loading 1s linear infinite;
      display: inline-block
    }
  }
  
  @keyframes loading {
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }
}
</style>
