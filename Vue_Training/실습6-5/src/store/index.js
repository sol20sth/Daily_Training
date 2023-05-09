import Vue from 'vue'
import Vuex from 'vuex'
import state1 from '@/store/modules/todo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    today : new Date().toJSON().slice(0, 10) + 'T00:00'
  },
  
  getters: {
  },
  mutations: {
    plusTodo(state, input) {
      const nowDateObj = new Date()
      state.state1.list.push(
        {
          id: nowDateObj.getTime(),                // nowDateObj.getTime()
          content: input,                   // Todo 내용
          dueDateTime: nowDateObj.toJSON().slice(0, 10) + 'T00:00',  // 마감일
          isCompleted: false,               // 완료된 할 일
          isImportant: false,
        }
      )
    },
    COMPLETED(state, todo1) {
      state.state1.list.map((todo) => {
        if (todo===todo1) {
          todo.isCompleted = !todo1.isCompleted
 
        }
      })
    },
    IMPORTANT(state, todo1){
      state.state1.list.map((todo) => {
        if (todo===todo1) {
          todo.isImportant = !todo1.isImportant
        }
      })
    },
    UPDATE_TODO(state, dataTodo) {
      state.state1.list.map((todo) => {
        if (todo.id === dataTodo.todo.todo.id) {
          todo.content = dataTodo.content
          todo.dueDateTime = dataTodo.dueDateTime
        }
      })
    }
    // startData(state) {
    //   state.state1.list.map((todo) => {
    //     todo.isCompleted = false
    //     todo.isImportant = false
    //   })
    // }
  },
  actions: {
  },
  modules: {
    state1
  }
})
