<template>
  <div id="app" class="container">
    <h1>SSAFY 상담 예약 시스템</h1><br>
    <div class="half left">
      <Timetable @child-to-parent="getData"/>
    </div>
    <div class="half right">
      <MyList :teacherSelected="{resultSelected, resultTeacher}"/>
    </div>
</div>
    
</template>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import MyList from './components/MyList.vue'
import Timetable from './components/Timetable.vue'

export default {
    name: 'App',
    components: {
      MyList,
      Timetable
    },
    data: function() {
      return {
        resultSelected: [],
        resultTeacher: ''
      }
    },
    methods: {
      getData: function(selected, teacher){
        this.resultSelected = selected
        this.resultTeacher = teacher
      }
    }
    }
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
