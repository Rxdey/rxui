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
          </ul>
        </nav>
      </aside>
      <main class="main">
        <router-view></router-view>
      </main>
      <!-- <aside class="aside mobile"></aside> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  created(){
    // this.$toast({message:'测试'})
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
// .mobile{
//   width: 600px;
//   margin: 0;
// }
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
  &--title{
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold
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
      color: #63bbbb
    }
  }
}
</style>
