<template>
  <div class='container'>
    <h1>모든할일</h1><hr>
    <!-- {{todoList}} -->
    <span><button @click="addTodo">+</button>
    <input type="text" v-model="inputData" @click="startInput" @keyup-enter="startInput">
    </span>
    <div v-for="(todo,index) in todoList" :key="index">
        <div class="line-Color">      
            <input v-if="todo.isCompleted" checked=true id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <input v-if="!todo.isCompleted" id="checkBox1" type="checkbox" class="ms-3" @click="completedCheck(todo)">
            <h3 class="ms-3 pt-2" @click="changeShow(index)">{{todo.content}}</h3>

            <input v-if="todo.isImportant" checked=true type="checkbox" class="ms-auto me-3" @click="importantCheck(todo)">
            <input v-if="!todo.isImportant"  type="checkbox" class="ms-auto me-3" @click="importantCheck(todo)">
        </div>
        <div class=line-Color>
            <todo-update-form :todo="{todo}" :index="index" :showList="showList"/>
        </div>

    </div>

    
  </div>
</template>

<script>
import TodoUpdateForm from '@/views/TodoUpdateForm.vue'

export default{
    name: 'AllTodoPage',
    components: {
        TodoUpdateForm,
    },
    data() {
        return {
            inputData : "할 일을 작성해주세요!!",
            showList: [],
            showList2() {
                this.todoList.map(() => {
                    this.showList.push(false)
                })
            }
        }
    },
    computed: {
        todoList() {
            return this.$store.state.state1.list
        },
        
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
        changeShow(index){
            this.showList.splice(index, 1, !this.showList[index])
        }

    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
    margin-top: 30px;
}
.line-Color {
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
    margin-bottom: 10px;
}
.line-Color button {
    display: block;
    border-radius: 10px;
    background: rgb(203, 203, 238);
}


</style>