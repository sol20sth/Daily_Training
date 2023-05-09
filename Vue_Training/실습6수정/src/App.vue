<template>
  <div id="app" class="dflex">
    <SideBar/>

    <div class="bord2">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
  components: { SideBar },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.dflex {
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100%;
  display: flex;
}
.block-router {
  display: block;
  margin-bottom: 10px;
}
.bord {
  font-size: 25px;
  width: 200px;
  border: 1px solid black;
  margin-right: 10px;
  border-radius: 10px;
}
.bord2 {
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 50px;
}
input[id="checkBox1"] {
    position: relative;
    top: 8px;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid #999;
    appearance: none;
    cursor: pointer;
    transition: background 0.2s;
  }

  input[id="checkBox1"]:checked {
    background: #4259da;
    border: none;
  }
</style>
