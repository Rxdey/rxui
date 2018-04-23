# Button

### 基本样式
::: demo
<div style="max-width:500px">
  <rx-button type="blue" @click="btnClick('info')">提示</rx-button>
  <rx-button type="green" @click="btnClick('success')">成功</rx-button>
  <rx-button type="red" @click="btnClick('error')">错误</rx-button>
  <rx-button type="yellow" @click="btnClick('warning')">警告</rx-button>
</div>

<script>
export default {
  data() {
    return {
    }

  },
  methods:{
    btnClick(msg){
      this.$toast({message:'打开一条消息',type:msg})
    }
  }
}
</script>

:::

```html
<rx-button type="yellow" @click="btnClick('warning')">提示</rx-button>
```

``` javascript 
export default {
  data() {
    return {
    }

  },
  methods:{
    btnClick(msg){
      this.$toast({message:'打开一条消息',type:msg})
    }
  }
}
```
也可以直接调用 ` this.$toast.success('打开一条消息')`

### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
message | String| 消息内容 |  
type | String | 类型 | success/error/waraing/info | info
