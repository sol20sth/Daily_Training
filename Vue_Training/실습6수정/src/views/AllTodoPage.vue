<template>
  <div class='container'>
    <h1>모든할일</h1><hr>
    <!-- {{todoList}} -->
    <span><button @click="addTodo">+</button>
    <input type="text" v-model="inputData" @click="startInput" @keyup-enter="startInput">
    </span>
    <div class=line-Color v-for="(todo,index) in todoList" :key="index">
        
        <input v-if="todo.isCompleted" checked=true id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
        <input v-if="!todo.isCompleted" id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
        <h3 class="ms-3" >{{todo.content}}</h3>
        

        <input v-if="todo.isImportant" checked=true type="checkbox" class="ms-auto me-3" @click="importantCheck(todo)">
        <input v-if="!todo.isImportant"  type="checkbox" class="ms-auto me-3" @click="importantCheck(todo)">

    </div>
    <formData/>
    
  </div>
</template>

<script>
import formData from './formData.vue'

export default {
    name: 'AllTodoPage',
    components: {
        formData
    },
    data() {
        return {
            inputData : "할 일을 작성해주세요!!",
        }
    },
    computed: {
        todoList() {
            return this.$store.state.state1.list
        }
    },
    methods: {
        startInput() {
            this.inputData = ''
        },
        addTodo() {
            this.$store.commit('plusTodo', this.inputData)
            this.inputData = ''
        },
        completedCheck(todo) {
            this.$store.commit('COMPLETED', todo)
        },
        importantCheck(todo){
            this.$store.commit('IMPORTANT', todo)
        },

    }
}
</script>

<style>
.container {
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
    margin-top: 30px;
}
.line-Color {
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
}
div {
    margin-bottom: 10px;
}
</style>