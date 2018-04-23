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
@import url('./font/iconfont.css');
body,html,#app {
  width: 100%;
  height: 100%;
  margin: 0;padding: 0;
  background: #f0efef
}
body{
  background-color:white;
  color: #333333; /* dark gray not black */
  line-height: 1;
  font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif
}
pre{
  padding: 1em;
    border: none;
    overflow: auto;
    line-height: 1.45;
    max-height: 35em;
    position: relative;
    background: url('./blueprint.png') #F6F6F6;
    -moz-background-size: 30px,30px;
    -o-background-size: 30px,30px;
    -webkit-background-size: 30px,30px;
    background-size: 30px,30px;
    font-family: "Source Code Pro",Consolas,Menlo,Monaco,"Courier New",monospace
}
code{
    background: none;
    font-size: 1em;
    overflow-wrap: normal;
    white-space: inherit;
    background-color: #eee;
    border-radius: 2px;
    padding: 2px
    }
ul, ol {
    padding: 0;
    margin: 0px 0px 0px 50px;
}
ul {
    list-style-type: square;
    list-style-position: inside;

}

li {
     line-height:150%    
}
li ul, li ul {
    margin-left: 24px;
}
blockquote {
    border-left:.5em solid #eee;
    padding: 0 1em;
    margin-left:0;
    max-width: 476px;
}
blockquote  cite {
 /* /   font-size:14px; */
    line-height:20px;
    color:#bfbfbf;
}
blockquote cite:before {
    content: '\2014 \00A0';
}

blockquote p {  
    color: #666;
    max-width: 460px;
}
hr {
/* /   width: 540px; */
    text-align: left;
    margin: 0 auto 0 0;
    color: #999;
}
table {
    margin: 10px 0 15px 0;
    border-collapse: collapse;
   
}
td,th { 
    border: 1px solid #ddd;
    padding: 15px 15px;
}


</style>
