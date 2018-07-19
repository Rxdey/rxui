# scroller

<a href="http://localhost:8080/#/scroller" target="_blank">预览地址</a>
移动端调试模式

```html
<Scroll ref="scroll" :height="height" isPullDown isPullUp @onPullDown="handlePullDown" @onPullUp="handlePullUp">
      <ul class="list">
        <li v-for="item in list" @click="listClick" :key="item">{{item}}</li>
      </ul>
</Scroll>
```

### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
height | Number| 必填滚动高度 | -- | 0
speed | Number | 惯性速度 | -- |150 
isPullDown | Boolean | 开启下拉 | true/false |false 
isPullUp | Boolean | 开启上拉 | true/false |false 

### 方法

名称 | 参数 | 说明 | 备注 
- | :-: | :-: | :-: | :-:
onPullDown | | 下拉事件 | -- 
onPullUp |  | 上拉事件 | -- 