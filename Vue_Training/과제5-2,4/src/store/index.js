import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCountDouble(state) {
      return state.counter * 2
    }
  },
  mutations: {
    INCREASE() {
      console.log(this.state.counter)
      this.state.counter++
    },
    DECRESE() {
      console.log(this.state.counter)
      this.state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
