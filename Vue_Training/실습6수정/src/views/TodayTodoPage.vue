<template>
  <div class='container'>
    <h1>오늘 할 일</h1><hr>
    <!-- {{todoList}} -->
    <div v-for="(todo,index) in completedData" :key="index">
        <div v-if="today === todo.dueDateTime && !todo.isCompleted" class="line-Color"> 
            <input id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <h3 class="ms-3">{{todo.content}}</h3>
            
            <input type="checkbox" class="ms-auto me-3 " @click="importantCheck(todo)">
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'TodayTodoPage',
    computed: {
        completedData() {
            return this.$store.state.state1.list
        },
        today() {
            return this.$store.state.today
        }
    },
    methods: {
        completedCheck(todo){
            this.$store.commit('COMPLETED', todo)
        },
        importantCheck(todo){
            this.$store.commit('IMPORTANT', todo)
        }
    }
}
</script>

<style>

</style>