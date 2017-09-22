<template>
  <div id="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '//fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';
@import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  height: 100%;
}
</style>
