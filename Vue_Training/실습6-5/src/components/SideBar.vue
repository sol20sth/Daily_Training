<template>
    <nav class="bord">
      <router-link class="block-router" to="/">모든</router-link>
      <router-link class="block-router" to="/today">오늘</router-link> 
      <router-link class="block-router" :to="{name: 'important'}">중요</router-link>
    </nav>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
.bord2 {
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
}
</style>