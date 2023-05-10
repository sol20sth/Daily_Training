<template>
  <div class='container'>
    <h1>중요한일</h1><hr>
    <!-- {{todoList}} -->
    <div v-for="(todo,index) in AllData" :key="index">
        <div class=line-Color v-if="todo.isImportant"> 
            <input v-if="todo.isCompleted" checked=true id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <input v-if="!todo.isCompleted" id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <h3 class="ms-3 pt-2">{{todo.content}}</h3>
            
            <input checked=true type="checkbox" class="ms-auto me-3" @click="importantCheck(todo)">
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'ImportantTodoPage',
    computed: {
        AllData() {
            return this.$store.state.state1.list
        },

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
</style>