# Loading

### 基础写法
```html
<Rxloading :isShow="true"></Rxloading>
```

### 指令模式

在需要显示加载框的元素上添加 `v-loading` 指令

<!-- > 当前元素的 `position` 属性需要为 `relative` 或 `absolute` -->


```html
<div class="page" v-loading="true"></div>
```
* 指令装饰器
`.full` 装饰器设置为全屏显示
```html
<div class="page" v-loading.full="true"></div>
```



### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
isShow | Boolean| 显示 | true/false | false

### 指令

装饰器 | 说明 
- | :-: 
.full |  全屏展示 