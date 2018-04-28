<template>
  <div class="page">
    <div class="example btn-group">
      <p>基础样式</p>
      <rx-button type="green">确定</rx-button>
      <rx-button type="red">确定</rx-button>
      <rx-button type="yellow">确定</rx-button>
      <rx-button>确定</rx-button>
      <p>不同状态</p>
      <rx-button size="small" type="green">确定</rx-button>
      <rx-button size="small" type="blue">确定</rx-button>
      <rx-button size="small">确定</rx-button>

      <rx-button size="large" :disabled="true">确定</rx-button>
      <rx-button type="red" size="large" :disabled="true">确定</rx-button>
      <rx-button type="blue" size="large">确定</rx-button>
      <p>添加图标</p>
      <rx-button type="blue" icon="rx-icon-share" size="small">分享</rx-button>
      <rx-button type="default" icon="rx-icon-share" size="small">分享</rx-button>
      <rx-button type="red" icon="rx-icon-share" size="small">分享</rx-button>
      <p>简单图标</p>
      <rx-button type="default" :single="true" icon="rx-icon-close">Button</rx-button>
      <rx-button type="green" :single="true" icon="rx-icon-reload">Button</rx-button>
      <rx-button type="red" :single="true" icon="rx-icon-del">Button</rx-button>
      <rx-button type="blue" :single="true" icon="rx-icon-edit">Button</rx-button>
      <p>加载动画</p>
      <rx-button type="default" :loading="true" :single="true">Button</rx-button>
      <rx-button type="green" :loading="true" :single="false">Button</rx-button>
      <rx-button type="red" :loading="true" :single="false">Button</rx-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.page{box-sizing: border-box;
position: relative;
button{
   font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
}
}
.example{background: #fff;box-sizing: border-box;padding: 10px;
p{border-left: 4px solid springgreen;padding-left: 10px}
}
</style>
