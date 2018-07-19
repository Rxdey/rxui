<template>
<transition name="fadeup">
  <div class="rx-as" v-show="isShow" :value="value" @click="maskClick">
      <div class="rx-as--sheet">
        <ul class="rx-as__list">
          <li class="rx-as__list__item" :class="item.type" @click.stop="menuClick(index,item)" v-for="(item,index) in menu" :key="index">{{item.label}}</li>
          <li class="rx-as__list__item rx-as--close" :style="{ color: closeMenu.color}" @click.stop="close">{{closeMenu.label}}</li>
        </ul>
      </div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
  name:'ActionSheet',
  props:{
    value: {
        type: Boolean,
        default:false
    },
    isMask: {
        type: Boolean,
        default:false
    },
    menu: {
        type: Array,
        default:()=>[]
    },
    closeMenu:{
      type:Object,
      default:()=>{return{label:'取消',color:'red'}}
    },
    autoToClose:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      btnList:[
        {color:'red',value:'确定'},
      ],
      isShow:false
    }
  },
  methods:{
    menuClick(index,item){
      if(this.autoToClose)this.isShow = false
      this.$emit('menuClick',{index,item})
    },
    close(){
      this.isShow = false;
      this.$emit('close')
    },
    maskClick(){
      if(this.isMask){
        this.isShow = false;
        this.$emit('onMaskClick')
      }
    }
  },
  watch:{
      value(val) {
        this.isShow = val;
      },
      isShow(val) {
        this.$emit('input', val);
      }
  },
  mounted(){
    if(this.value)this.isShow=true;
  }
}
</script>

<style lang="less">
@import url("../../style/default.less");
.rx-as {
  opacity: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  font-size: 16px;
  transition: 0.3s;
  &--sheet{
    width:100%;
    background: #eee;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    transition: 0.3s;
    // animation: upin 0.3s linear forwards
  }
  &__list{
    display: flex;
    font-size: 16px;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    flex-flow: column;
    &__item{
      padding: 10px;
      text-align: center;
      font-size: 1em;
      box-sizing: border-box;
      background: #fff;
      &.red{color: @color-red}
      &.green{color: @color-green}
      &.yellow{color: @color-yellow}
      &:active{background: #e6e6e6}
      &.rx-as--close{
        margin-top: 5px
      }
    }
  }
}
.fadeup-enter-active,
.fadeup-leave-active {
  opacity: 1;
  .rx-as--sheet{transform: translateY(0%);}
}
.fadeup-enter,
.fadeup-leave-to {
  opacity: 0;
  .rx-as--sheet{transform: translateY(100%);}
}


</style>
