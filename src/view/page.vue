<template>
  <div class="container" :class="{move:isTransfrom}" v-loading.full="isloading">
    <main>
      <header class="header">
        <h4>Title</h4>
        <span class="list" @click="popLeft">...</span>
      </header>
      <div class="main">
        <router-view class="main-page"></router-view>
      </div>
    </main>
    <div class="menu">
      <header class="header">
        <h4>Nav</h4>
      </header>
      <ul class="menu-list">
        <li @click="popLeft" v-for="(item,index) in navList" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      navList: [
        { path: '/btn', name: 'Btn' },
        { path: '/t', name: 'Toast' },
        { path: '/msg', name: 'MessageBox' },
        { path: '/load', name: 'Loading' },
        { path: '/as', name: 'Action Sheet' },
        { path: '/calender', name: 'Calender' },
        { path: '/scroller', name: 'Scroller' },
        { path: '/pop', name: 'pop' },
      ],
      isTransfrom: false
    }
  },
  methods: {
    popLeft() {
      this.isTransfrom = !this.isTransfrom;
    }
  },
  computed:{
    isloading(){
      return this.$store.state.isloading
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  transition: 0.3s transform;
  transform: translateX(0%);
  &.move {
    transform: translateX(-50%);
  }
}
.container *,
.container {
  margin: 0;
  box-sizing: border-box;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
}
.header {
  width: 100%;
  background: #fff;
  text-align: center;
  height: 45px;
  line-height: 45px;
  position: relative;
  .list {
    position: absolute;
    right: 0;
    top: 0;
    width: 45px;
    &:active {
      background: #f7f7f7;
    }
  }
}
.main {
  width: 100%;
  flex-grow: 1;
  display: flex;
  position: relative;
  &-page{
    flex: 1;
  }
}
.menu {
  width: 50%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  right: -50%;
  .header {
    border-bottom: 1px solid #ddd;
  }
}
ul.menu-list {
  list-style: none;
  li {
    list-style: none;
    text-align: center;
    border-bottom: 1px dashed #ddd;
    a {
      text-decoration: none;
      color: #444;
      padding: 10px;
      display: block;
      &:active {
        background: #eee;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
