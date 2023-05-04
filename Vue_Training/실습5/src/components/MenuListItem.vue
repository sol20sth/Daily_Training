<template>
  <div id="ho">
    <button class="d-flex border-0" @click="clickMenu" :class="{xx:menu.selected}">
      <img :src='`${menu.image}`'>
      {{menu.title}}
      {{menu.price}}
    </button>
  <br></div>
  
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },

  methods: {
    clickMenu() {
      this.$store.commit('updateMenuList', this.menu)
    },
    
  }

}
</script>

<style>
img {
  width: 50px;
}
#ho :hover {
  background-color: red;
}
.xx {
  background-color: blue;
}
</style>