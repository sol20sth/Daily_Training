<template>
  <div class="wrap">
    <h2>2단계</h2>
    <div class="detail d-flex">
        <div class="prev d-flex align-items-center" @click="toHappling"><span class="btn">이전</span></div>
        <div><img src="../assets/happlossome.png" alt="" class="image"></div>
        <div class="next d-flex align-items-center" @click="toHapplower"><span class="btn">다음</span></div>
    </div>
    <h2 class="">해플라썸</h2>
  </div>
</template>

<script>
export default {
    name: 'Happlossome',
    methods : {
        toHappling() {
            alert('이전단계로 돌아갈 수 없습니다!!!!!!')
        },
        toHapplower() {
            this.$router.push({name: 'happlower'})
        }
    }

}
</script>

<style>

</style>