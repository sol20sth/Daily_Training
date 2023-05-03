<template>
    <div class="container">
        <h3>상담 신청 현황</h3><br>
        <h5>상담 선생님</h5>
        <p>성함 : <span>{{teacherSelected.resultTeacher}}</span></p>
        <hr>
        <h3>예약 현황</h3>
        <h5>시간들 : <span v-for="select in teacherSelected.resultSelected" :key="select.id">{{select}}  </span></h5>
        <br><hr>
        <img src="../ssafy-logo.png"/>
    </div>  

</template>

<script>
export default {
    name: 'MyList',
    props: {
        teacherSelected: Object,
    }
}
</script>

<style>

</style>