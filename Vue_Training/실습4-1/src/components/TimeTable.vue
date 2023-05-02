<template>
    <div id="total">
        <h1>버튼 박스 제작</h1>
        <h2>예약 페이지</h2>
        <h3>시간 선택</h3>
        <div class="container">
            <div class="row">
                <button class="col-2" v-for="time in times" :key="time.id" @click="ClickButton(time)" :class="{selectedColor:selected.includes(time)}"> {{time}}</button>    
            </div>
        </div>
        <hr>
        <div>
            <h3>선택 시간 : <span v-for="final in selected" :key="final.id">{{final}}   </span></h3>
        </div>
    </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
    name: 'TimeTable',
    data() {
        return {times: [
      "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
      "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
      "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
    ], selected: []}
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
    }
}}

</script>

<style>
    
    .selectedColor{
        background-color: rgba(217, 240, 181, 0.932);
    }
</style>