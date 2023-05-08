<template>
  <div class="menu-item d-flex justify-content-bw align-items-center">
    <p class="sizeOption">{{option.type}}</p>
    <div class="sizeOption">
      <button class="btnRound" @click="decrease">-</button>
      <span>{{option.count}}</span>
      <button class="btnRound" @click="increase">+</button>
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
.sizeOption {
  margin: 0px;
  height: 50px;
  padding: 13px 0px;
  text-align: center;
  align-items: center;
}
.btnRound {
  border-radius: 12px;
  height: 30px;
  padding: 0px 7px;
  background-color: rgb(147, 187, 203);
}
</style>