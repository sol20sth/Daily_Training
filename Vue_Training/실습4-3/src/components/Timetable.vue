<template>
  <div >
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
            <br>
            <div>
              <button @click="finalCheck">예약 확정</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeTable',
    data() {
        return {times: [
      "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
      "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
      "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
    ], selected: [], teacher: ''}
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
                  this.teacher = ''
            }
            else {
              this.teacher = name
          }
        },
        Large(event) {
          event.target.setAttribute('class', 'selectedColor')
        },
        finalCheck() {
          if (this.teacher.length === 0 && this.selected.length === 0) {
            alert('선생님, 시간을 선택해 주세요!!')
          }
          else if (this.teacher.length === 0) {
            alert('선생님을 선택해 주세요!!!')
          }
          else if (this.selected.length === 0) {
            alert('시간을 선택해 주세요!!')
          } 
          else {
            alert('예약이 확정되었습니다.')
            this.$emit('child-to-parent', this.selected, this.teacher)
            this.selected = []
            this.teacher = ''
          }
        }

    }
}
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
.selectedColor{
  background-color: rgba(141, 174, 236, 0.932);
}
</style>