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
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  height: 100%;
}
</style>
