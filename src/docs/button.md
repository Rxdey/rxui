# Button

### 基本样式


```html
<rx-button type="green">确定</rx-button>
<rx-button type="red">确定</rx-button>
<rx-button type="yellow">确定</rx-button>
<rx-button type="blue">确定</rx-button>
<rx-button >确定</rx-button>
```

### 禁用状态

添加 `disabled` 属性



```html
 <rx-button type="blue" disabled="disabled">确定</rx-button>
```

### 不同大小

添加 `size` 属性 `small` 和 `large` ，不添加默认为 `nomarl`



```html
  <rx-button type="yellow" size="small">确定</rx-button>
  <rx-button type="blue" size="large">确定</rx-button>
```

### 带图标的按钮

添加 `icon` 属性 



```html
 <rx-button type="red" icon="rx-icon-share">分享</rx-button>
```

也可以自定义添加图标


```html
<rx-button type="yellow">
  <i class="rx-icon-share"></i>确定
</rx-button>
```
### 简单图标
添加 `single` 属性为 `true`
```html
 <rx-button type="default" :single="true" icon="rx-icon-guanbi">Button</rx-button>
```

### 加载状态

添加 `loading` 属性为 `true`



```html
<rx-button type="blue" :loading="true">加载中...</rx-button>
```

### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
type | String| 颜色 | green/yellow/red/blue |
size | String | 大小 | large/small |
disabled | String | 禁用状态 |disabled |
icon | String | 图标 |  |
single | Boolean | 简单图标 | true/false | 
loading | Boolean | 加载状态 | true/false | 