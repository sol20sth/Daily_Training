<template>
  <div id="app">
    <HomeHome />
    <AboutAbout />
  </div>
</template>

<script>
import AboutAbout from './components/AboutAbout.vue'
import HomeHome from './components/HomeHome.vue'

export default {
  name: 'App',
  components: {
    HomeHome,
    AboutAbout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
.global {
  width: 100px;
  margin : 0 auto;
}
</style>
