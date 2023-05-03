<template>
  <div>
    <hr>
    결정세액: {{finalTax}} 만원
  </div>
</template>

<script>

export default {
  name: 'FinalTax',
  props: {
    group2:Object,
  },
  computed: {
    finalTax() {
      if (this.group2.allTaxPrice - this.group2.Taxation < 0){
        return 0
      } 
      else {
        return this.group2.allTaxPrice - this.group2.Taxation
      }
    }
  }
}
</script>

<style>

</style>