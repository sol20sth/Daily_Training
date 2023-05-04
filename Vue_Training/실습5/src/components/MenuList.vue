<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <MenuListItem  v-for="(menu, index) in menuList" :key="index" :menu="menu"/>
  </div>
</template>

<script>
import MenuListItem from "@/components/MenuListItem.vue"

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>

</style>