<template>
  <div class="rx-input" ref="input" :class="{'has-error':error}">
    <div class="rx-input-title">
      <label :for="'rx-input-'+createId" class="title">{{title}}</label>
    </div>
    <div class="rx-input-input">
      <div class="rx-input-input__block">
        <input 
        :id="'rx-input-'+createId" 
        :placeholder="placeholder" :type="type" :class="['rx-input-input--input',`text-${align}`]" :maxLength="max" :minLength="min" v-model="currentValue" @blur="handleBlur" @keyup.enter="handleEnter" @focus="handleFocus" :disabled="disabled" :readonly="readonly">
      </div>
      <div class="rx-input-input__clear" @click="clearInput" v-show="isClear">
        <i class="iconfont icon-error"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    title: {
      default: '账号'
    },
    placeholder: {
      default: '请输入账号'
    },
    value: [String, Number],
    required: {  // 非空
      type: Boolean,
      default: false
    },
    max: {  
      type: String,
      default: ''
    },
    min: {  
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  name: "rxInput",
  data () {
    return {
      currentValue: '',
      error: false,
      isClear: false,
    }
  },
  methods: {
    handleBlur (e) {
      if (this.required) {
        this.error = !this.currentValue
      }
      this.isClear = false;
      this.$emit('blue',this.currentValue,e);
    },
    handleFocus(e){
      this.isClear = !!this.currentValue;
      this.$emit('focus',this.currentValue,e);
    },
    handleChange(val){
      this.isClear = !!val;
      this.$emit('change',val);
    },
    handleEnter(e){
      this.$emit('enter',this.currentValue,e);
    },
    clearInput(){
      this.currentValue = '';
    }
  },
  computed: {
    createId () {
      let str = Math.random().toString(36).substr(2);
      if (str.length >= 5) {
        return str.substr(0, 5);
      }
      str += random(5 - str.length);
      return str;
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val);
      this.handleChange(val);
    }
  },
  components: {
  },
  mounted () {
    this.currentValue = this.value;
  },
}
</script> 
<style lang = "less" >
@import url('//at.alicdn.com/t/font_647706_sc00zdvj6lq.css');
.rx-input {
  display: flex;
  flex-flow: row nowrap;
  background: #fff;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
  position: relative;
  font-size: 28px;
  &.has-error {
    color: #fc2a2a;
    input {
      color: #fc2a2a;
    }
  }
  &,
  & * {
    box-sizing: border-box;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    border-bottom: 1px solid #dcdcdc;
    bottom: 0;
    margin: 0 30px;
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
  &-title {
    /* font-size: 32px; */
    padding: 0 20px 0 0;
    label {
      display: block;
      word-wrap: break-word;
      word-break: break-all;
      line-height: 1.4;
    }
  }
  &-input {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-flow: row;
    &__block {
      flex: 1;
    }
    &--input {
      width: 100%;
      outline: none;
      border: none;
      padding: 0 0 0 12px;
      appearance: none;
      height: 1.4em;
      line-height: 1.4em;
      &.text-left {
        text-align: left;
      }
      &.text-right {
        text-align: right;
      }
      &.text-center {
        text-align: center;
      }
    }
    &__clear {
      overflow: hidden;
      color: rgba(0, 0, 0, 0.2);
      line-height: 1.4;
      margin-left: 5px;
      i {
        font-size: 32px;
      }
    }
  }
}
</style>