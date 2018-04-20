<template>
  <button class="rx-btn" @click="handleClick" :class="['rx-btn'+'--'+type,size!=='normal'&&'rx-btn--'+size]" :disabled="disabled">
    <!-- <i class="icon"></i> -->
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
      type:String,
      default:'normal'
    },
    disabled: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick(evt) {
      console.log(1);
        this.$emit('click', evt);
      },
    handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation();
        }
      }
  },
  created(){
    console.log(this.$slots)
  }

}
</script>

<style scoped lang="less">
@import url("../../../src/style/var.less");
.mix-btn(@backColor,@color,@fontcolor){
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 16px;
  background: @backColor;
  border: 1px solid @color;
  color: @fontcolor;
  cursor: pointer;
  text-align: center;
  outline: none
  }
 .rx-btn~.rx-btn{
   margin: 5px
 } 
.rx-btn {
  &:active,&:hover{opacity: 0.85}
  .mix-btn(#fff,#ddd,#444);
&--default {
    .mix-btn(#fff,#ddd,#444);
    &:active,&:hover{background: #eee}
  }
&--red {
    .mix-btn(@color-red,@color-red,#fff);
  }
&--blue {
    .mix-btn(@color-blue,@color-blue,#fff);
  }
&--green {
    .mix-btn(@color-green,@color-green,#fff);
  }
&--yellow {
   .mix-btn(@color-yellow,@color-yellow,#fff);
  }
&--large{
  display: block;
  width: 100%;
}
&--small{
  padding: 5px 10px
}

}
</style>
