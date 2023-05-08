<template>
  <div class="menu-item d-flex justify-content-bw align-items-center">
    <p>{{option.type}}</p>
    <div>
      <button @click="decrease">-</button>
      <span>{{option.count}}</span>
      <button @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.dispatch('increaseCount', this.option)
    },
    decrease() {
      this.$store.dispatch('decreaseCount', this.option)
    },
  },
}
</script>

<style>
.button {
        margin: 0 auto;
        height: 100px;
        border: 15px solid rgb(163, 151, 198);
        border-radius: 12px;
    }
</style>