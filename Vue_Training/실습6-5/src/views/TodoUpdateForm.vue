<template>
  <div v-if="showList[index]">
    <button class="ms-3" @click="upDateData">수정하기</button>
    <input class="ms-3" type="text" v-model="inputData">
    <input class="ms-3" type="text" v-model="inputDue">
  </div>
</template>

<script>
export default {
  name: 'TodoUpdateForm',
  props: {
    todo: Object,
    index: Number,
    showList: Array,
  },
  data() {
    return {
      inputData: this.todo.todo.content,
      inputDue: this.todo.todo.dueDateTime,
      
    }
  },
  methods: {
    upDateData() {
      this.$store.commit('UPDATE_TODO', {todo: this.todo, content: this.inputData, dueDateTime: this.inputDue})
    }
  }
}
</script>

<style>

</style>