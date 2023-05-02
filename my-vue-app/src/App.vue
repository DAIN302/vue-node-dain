<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <MyReal/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MyReal from './components/MyComp.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    MyReal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
