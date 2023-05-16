import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router'

const API_URL = 'http://127.0.0.1:8000'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: [],
    token: null,

  },
  getters: {
  },
  mutations: {
    // SIGN_UP(state, token) {
    //   state.token = token
    // },
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name:'TodoList' })
    }
  },
  actions: {
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      })
      .then((res) => {
        // context.commit('SIGN_UP', res.data.key)
        console.log(res)
        // console.log(res.data.key)
        this.$router.push('Login')
      })
      .catch((err) => {
        alert('다시 입력하시오')
        console.log(err)
      })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then((res) => {
        context.commit('SAVE_TOKEN', res.data.key)
        console.log(res)
      
        // context.commit('LOGIN', res.data.key)
      })
      .catch((err) => {
        alert('잘못된 아이디, 비밀번호입니다')
        console.log(err)
      })
    }
  },
  modules: {
  }
})
