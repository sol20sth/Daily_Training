<template>
  <div class="wrap">
    <h2>1단계</h2>
    <div class="detail d-flex">
        <div class="prev d-flex align-items-center" @click="toHappeed"><span class="btn">이전</span></div>
        <div><img src="../assets/happling.png" alt="" class="image"></div>
        <div class="next d-flex align-items-center" @click="toHapplossome"><span class="btn">다음</span></div>
    </div>
    <h2 class="">해플링</h2>
  </div>
</template>

<script>
export default {
    name: "Happling",
    methods : {
        toHappeed() {
            alert('이전단계로 돌아갈 수 없습니다!!!!!!')
        },
        toHapplossome() {
            this.$router.push({name: 'happlossome'})
        }
    }
}

</script>

<style>

</style>