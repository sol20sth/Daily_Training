<template>
  <div id="ho">
    <button class="d-flex border-0" @click="clickSize" :class="{xx:size.selected}">
      <p>{{size.name}}</p>
      <p>{{size.price}}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    clickSize() {
      this.$store.commit('updateSizeList', this.size)
    },
    
  }
}
</script>

<style>
#ho :hover {
  background-color: red;
}
.color {
  background-color: rgb(32, 121, 66);
}
</style>