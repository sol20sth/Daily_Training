<!-- 
<template>
  <div>
    <h2>회원가입</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="username">사용자명:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password1">비밀번호:</label>
        <input type="password" id="password1" v-model="password1">
      </div>
      <div>
        <label for="password2">비밀번호 확인:</label>
        <input type="password" id="password2" v-model="password2">
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password1: '',
      password2: '',
    };
  },
  methods: {
    signup() {
      if (this.password1 !== this.password2) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      axios.post('http://127.0.0.1:8000/accounts/signup', {
        username: this.username,
        password: this.password1,
      })
      .then(response => {
        console.log(response.data);
        // 회원가입 성공 시 처리
      })
      .catch(error => {
        console.error(error);
        // 회원가입 실패 시 처리
      });
    },
  },
};
</script> -->


<template>
  <div>
    <input type="text" id="username" v-model="username">
    <br>
    <label for="password">Password:</label>
    <input type="password" id="passwrod" v-model="password">
    <label for="confirm_password">confirm_password:</label>
    <input type="password" id="confirm_password" v-model="confirm_password">
    <button type="submit" @click="signup">Signup</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data: function () {
    return {
      username: null,
      password: null,
      confirm_password: null,
    }
  },
  methods: {
    signup() {
      if (this.password !== this.confirm_password) {
        console.log("Password and Confirm Password do not match.")
        return;
      }

      axios.post('http://127.0.0.1:8000/accounts/signup/', {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      })
        .then((res) => {
          console.log(res)
          // 회원가입 성공 시 로그인 페이지로 이동
          this.$router.push('/login') // 가정: Vue Router를 사용하여 라우팅하고 있다고 가정
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>