<template>
  <div class="black" id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{ParentData}}</p>
    <p>childData: {{childData}}</p>
    <div>
      <AppParent :appData="appData" @send-parent-app="getParent"/>
    </div>
  </div>
</template>

<script>
import AppParent from './components/AppParent.vue' 

export default {
  name: 'App',
  components: {
    AppParent
  },
  data: function() {
    return {
      appData:'',
      childData:'',
      ParentData:''
    }
  },
  methods: {
    getParent: function(childD, parentD) {
      this.childData = childD
      this.ParentData = parentD
    }
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
.black {
  width: 500px;
  margin: 500px auto;
  border: 1px solid black;
}
</style>
