// App.vue

<template>
  <div id="app">
    <p>Counter: {{ count }}</p>
    <p>Counter x2: {{ doubleCount }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App', 

  computed: {
    count() {
      return this.$store.state.counter
    },
    doubleCount() {
      return this.$store.getters.getCountDouble
    }
  },
  methods: {
    increase: function () {
      this.$store.commit('INCREASE')
    },
    decrease: function () {
      this.$store.commit('DECRESE')
    },
  },

}
</script>

<style>
</style>