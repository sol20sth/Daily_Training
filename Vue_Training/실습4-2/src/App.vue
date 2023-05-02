<template>
  <div id="app" class="container">
    <h1>SSAFY 상담 예약 시스템</h1><br>
    <div class="half left">
        <h3>예약 페이지</h3><br>
        <h5>선생님 선택</h5>
        <div>
            <input type="button" value="Eric"  @click="Teature('Eric')" :class="{selectedColor:teacher.includes('Eric')}">
            <input type="button" value="Tony"  @click="Teature('Tony')" :class="{selectedColor:teacher.includes('Tony')}">
        </div>
        <br>
        <hr>
        <div class="container">
            <h5>시간 선택</h5>
            <div class="row">
                <button class="col-2 border-0" v-for="time in times" :key="time.id" @click="ClickButton(time)" :class="{selectedColor:selected.includes(time)}"> {{time}}</button>    
            </div>
        </div>
    </div>

      <div class="half right">
        <div class="container">
          <h3>상담 신청 현황</h3><br>
          <h5>상담 선생님</h5>
          <p>성함 : <span>{{teacher[0]}}</span></p>
          <hr>
          <h3>예약 현황</h3>
          <h5>시간들 : <span v-for="select in selected" :key="select.id">{{select}}  </span></h5>
        <br><hr></div>
        <img src="./ssafy-logo.png"/>
      </div>  
    </div>
    
</template>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

export default {
    name: 'App',
    data() {
        return {times: [
      "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
      "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
      "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
    ], selected: [], teacher: []}
    },
    methods: {
        ClickButton(time) {
            if (this.selected.includes(time)) {
                this.selected.splice(this.selected.indexOf(time),1)
            }
            else if (this.selected.length > 4) {
                alert('5타임까지만 신청할 수 있습니다')
            } else {
                this.selected.push(time)
            }
        },
        Teature(name) {
            if (this.teacher.includes(name)) {
                  this.teacher.splice(this.teacher.indexOf(name),1)
            }
            else if (this.teacher.length === 1) {
              alert('선생님을 한분만 고르세요')
            } else {
              this.teacher.push(name)
          }
        },
        Large(event) {
          event.target.setAttribute('class', 'selectedColor')
        }

}}
</script>

<style>
input {
  border: 1px solid black;
  width: 120px;
  background-color: white;
}
button {
  background-color: white;
}
input:hover {
  background-color: rgb(235, 109, 109) !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.selectedColor{
  background-color: rgba(141, 174, 236, 0.932);
}
.half {
    width: 100%;
    height: 500px;

}
.left {
    width: 450px;
    float: left;
    box-sizing: border-box;
    
}
.right {
    width: 450px;
    float: right;
    box-sizing: border-box;
    background-color: rgba(158, 196, 218, 0.945);
}
</style>
