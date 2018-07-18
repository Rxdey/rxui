# scroller

<a href="http://localhost:8080/#/scroller" target="_blank">测试地址</a>
移动端调试模式

```javascript
<Scroll :height="height">
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