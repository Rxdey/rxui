# actionsheet

```html
 <ActionSheet v-model="isShow" :menu="menuLists" isMask @menuClick="menuClick" autoToClose></ActionSheet>
```
```javascript
export default {
  data() {
    return {
      isShow:false,
      menuLists:[
        {
          value:1,
          label:'确定',
          type:'default'
        }
      ]
    }
  },
```

### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
v-model | Boolean| 显示 | true/false | false
isMask | Boolean| 是否点击mask关闭 | true/false | false
autoToClose | Boolean| 点击菜单关闭 | true/false | false
menu | Array| 菜单列表 | [] | []
closeMenu | Object| 关闭菜单配置 | label/color | --

### 方法

名称 | 参数 | 说明 | 备注 
- | :-: | :-: | :-: | :-:
menuClick | index,item | 菜单点击事件 | -- 
maskClick |  | 遮罩点击事件 | -- 
close |  | 关闭按钮点击事件 | -- 