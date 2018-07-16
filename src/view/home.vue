<template>
  <div class="container is-vertical">
    <header class="header">
      <h2 style="margin:0">RxUi</h2>
    </header>
    <div class="container">
      <aside class="aside">
        <nav class="nav">
          <ul>
            <p class="nav--title">组件</p>
            <li class="nav--item">
              <router-link to="/">TestPage</router-link>
            </li>
            <li class="nav--item">
              <router-link to="/button">Button</router-link>
            </li>
            <li class="nav--item">
              <router-link to="/toast">Toast</router-link>
            </li>
            <li class="nav--item">
              <router-link to="/MessageBox">MessageBox</router-link>
            </li>
            <li class="nav--item">
              <router-link to="/loading">Loading</router-link>
            </li>
            <li class="nav--item">
              <router-link to="/actionsheet">ActionSheet</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main">
        <router-view name="default"></router-view>
      </main>
      <aside class="aside mobile">
        <div class="mobile-bg">
          <div class="mobile-content">
            <!-- <router-view name="other"></router-view> -->
            <iframe :src="link" width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      link:'http://localhost:8080/#/page'
    }
  },
  methods: {
  },
  created() {
   this.link = this.$route.meta.other
  },
  watch:{
    '$route'(to,from){
      this.link = to.meta.other
    }
  }
}
</script>

<style lang="less">
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1;
  &.is-vertical {
    flex-direction: column;
  }
}
.header {
  width: 100%;
  height: 60px;
  padding: 15px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  // margin-bottom: 5px;
  line-height: 60px;
}
.aside {
  width: 250px;
  overflow: auto;
  box-sizing: border-box;
  // margin-right: 5px;
  background: #fff;
}
.main {
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
}
.mobile {
  width: 401px;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-flow: column;
  .mobile-bg {
    box-sizing: border-box;
    background: url("../moblie.png")no-repeat;
    background-size: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-flow: column;
    padding: 114px 28px 194px 26px;
    .mobile-content{
      flex: 1;
      overflow: auto
    }
  }
}
.nav {
  ul {
    display: flex;
    flex-flow: column;
    margin: 0;
    padding: 0;
  }
  &--item {
    width: 100%;
    text-align: center;
    background: #fff;
    list-style: none;
  }
  &--title {
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #444;
    display: block;
    width: 100%;
    padding: 15px;
    background: #fff;
    box-sizing: border-box;
    &:hover {
      // background: #eee;
      color: #63bbbb;
    }
  }
}
 ::-webkit-scrollbar  
{  
    width: 5px;  /*滚动条宽度*/
    height: 5px;  /*滚动条高度*/
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  /*滚动条的背景区域的圆角*/
    background-color: #f7f7f7;/*滚动条的背景颜色*/  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  /*滚动条的圆角*/
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: rgb(218, 218, 218);  /*滚动条的背景颜色*/
}  
</style>
