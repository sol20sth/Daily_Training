<template>
    <div class="wrap">
    <h2>3단계</h2>
    <div class="detail d-flex">
        <div class="prev d-flex align-items-center" @click="toHapplossome"><span class="btn">이전</span></div>
        <div><img src="../assets/happlower.png" alt="" class="image"></div>
        <div class="next d-flex align-items-center" @click="toHome"><span class="btn">다음</span></div>
    </div>
    <h2 class="">해플라워</h2>
  </div>
</template>

<script>
export default {
    name: 'Happlower',
    methods: {
        toHapplossome() {
            alert('이전단계로 돌아갈 수 없습니다!!!!!!')
        },
        toHome() {
            alert('Home으로 돌아갑니다!! 성공!!')
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style>

</style>