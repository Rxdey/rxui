<template>
  <div class="rx-modal" v-if="modalShow">
    <div class="rx-modal--content">
      <div class="rx-modal--content__title">
        <h4>Title</h4>
      </div>
      <div class="rx-modal--content__body">
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
      <div class="rx-modal--content__foot">
        <button class="rx-modal--sure" @click="handleClick">确定</button>
        <button class="rx-modal--close" @click="handleClose">取消</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      modalShow:true
    }

  },
  methods:{
    handleClick(e){
      this.hide();
      this.$emit('handleSure',e);
    },
    handleClose(e){
      this.hide()
      this.$emit('handleClose',e)
    },
    show(){
      this.modalShow=true;
    },
    hide(){
      this.modalShow=false;
    }
  }
}
</script>

<style scoped lang="less">
@import url("../../../src/style/var.less");
.rx-btn {
  border: none;
  outline: none;
  background: #fff;
  width: 50%;
  padding: 15px;
  &:nth-child(2){border-left: 1px solid #ddd}
  flex: 1;
  cursor: pointer;
}
.rx-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &--content {
    min-width: 300px;
    max-width: 380px;
    background: #fff;
    border-radius: 4px;
    padding: 15px 0 0 0;
    overflow: hidden;
    &__title {
      padding: 10px 20px;
    }
    &__body {
      padding: 20px 20px;
    }
    &__foot {
      display: flex;
      flex-flow: row;
      border-top: 1px solid #ddd
    }
    h4 {
      margin: 0;
    }
  }
  &--sure {
    .rx-btn;
    &:hover,&:active{background: #eee}
  }
  &--close {
    .rx-btn;
    background: @color-red;
    color: #fff;
    &:hover,&:active{background: darken(@color-red,-10%)}
  }
}
</style>
