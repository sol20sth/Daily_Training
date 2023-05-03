<template>
  <div>
    <h2>산출세액: {{allTaxPrice}}</h2>
    <h2>세액감면:(-) {{group.Taxation}}</h2>
    <div>
      <FinalTax :group2="{allTaxPrice, Taxation:group.Taxation}"/>
    </div>
  </div>
</template>

<script>
import FinalTax from '../components/FinalTax.vue'
export default {
  name: 'TaxRate',
  components: { 
    FinalTax, 
  },
  data: function () {
    return {
      amountTax: 0
    }
  },
  props: {
    group: Object,
  },
  computed: {
    allTaxPrice() {
      if (this.group.TaxBase <= 1200) {
        return Math.round(this.group.TaxBase*0.06)
      } else if (1200 < this.group.TaxBase <= 4600) {
        return Math.round(this.group.TaxBase*0.15) - 108
      } else if (4600 < this.group.TaxBase <= 8800) {
        return Math.round(this.group.TaxBase*0.24 - 522)
      } else if (8800 < this.group.TaxBase <= 15000) {
        return Math.round(this.group.TaxBase*0.35 - 1490)
      } else if (15000 < this.group.TaxBase <= 30000) {
        return Math.round(this.group.TaxBase*0.38 - 1940)
      } else if (30000 < this.group.TaxBase <= 50000) {
        return Math.round(this.group.TaxBase*0.40 - 2540)
      } else if (50000 < this.group.TaxBase <= 100000) {
        return Math.round(this.group.TaxBase*0.42 - 3540)
      } else {
        return Math.round(this.group.TaxBase*0.45 - 6540)
      }
    }
  }

}
</script>

<style>

</style>