# MessageBox

>注:当前预览页面为同一个单页，故提示会显示在整个页面中间


``` javascript 
export default {
  methods:{
    showToast(){
      this.$msgbox({ message: '操作成功', title: '提示' ,btnSureName:'确定',isCancel:true,center:true})
      .then(res=>{
        // 确定
      })
      .catch(res=>{
        // 取消
      })
    }
  }
}
```

### 属性

参数 | 类型 | 说明 | 可选值 | 默认值 
- | :-: | :-: | :-: | :-:
message | String| 消息内容 |  
title | String | 标题 |  
btnSureName | String | 确定按钮名称 |  |确定
btnCloseName | String | 取消按钮名称 |  |取消
isCancel | Boolean | 是否显示取消按钮 | true/flase |true
center | Boolean | 是否文字居中 | true/flase | false