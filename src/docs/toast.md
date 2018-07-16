# Toast

### 基本样式

```html
<rx-button type="yellow" @click="btnClick('warning')">提示</rx-button>
```

``` javascript 
export default {
  methods:{
    showToast(msg){
      this.$toast({message:'操作提示',type:'success',size:'large',position:'middle'})
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
size | String | 大小 | large/small | small
position | String | 位置 | middle/top/bottom | middle
