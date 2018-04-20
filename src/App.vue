<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./style/md.css');

body,html,#app {
  width: 100%;
  height: 100%;
  margin: 0;padding: 0
}
/* pre{
  background: #eee
} */
</style>
