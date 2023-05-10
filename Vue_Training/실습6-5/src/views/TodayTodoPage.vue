<template>
  <div class='container'>
    <h1>오늘 할 일</h1><hr>
    <span><button @click="addTodayTodo">+</button>
    <input type="text" v-model="inputData" @click="startReset">
    </span>

    <!-- {{todoList}} -->
    <div v-for="(todo,index) in completedData" :key="index">
        <div v-if="todo.dueDateTime.substr(0, todo.dueDateTime.length-6)===today && !todo.isCompleted" class="line-Color">
            <input id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <h3 class="ms-3 pt-2">{{todo.content}}</h3>
            
            <input type="checkbox" class="ms-auto me-3 " @click="importantCheck(todo)">
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'TodayTodoPage',
    data() {
        return {
            inputData: '오늘할일 만들기'
        }
    },
    computed: {
        completedData() {
            return this.$store.state.state1.list
        },
        today() {
            return this.$store.state.today
        },
    },
    methods: {
        completedCheck(todo){
            console.log(todo.dueDateTime.substr(0, todo.dueDateTime.length-6))
            this.$store.commit('COMPLETED', todo)
        },
        importantCheck(todo){
            this.$store.commit('IMPORTANT', todo)
        },
        addTodayTodo() {
            this.$store.commit('plusTodo', this.inputData)
            this.inputData = ''
        },
        startReset() {
            this.inputData = ''
        }

    }
}
</script>

<style>

</style>