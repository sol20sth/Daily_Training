<template>
  <div>
    <p>연봉입력 (만원): <input type="number" v-model.number="Salary" @change="inputI"></p>
    <p>세액감면액 (만원) <input type="number" v-model.number="Taxation" @change="inputI"></p><hr>
    <h2>종합소득금액: {{Salary}}만원</h2>
    <h2>종합소득공제: (-) 150 만원</h2>
    <h2>과세표준: {{TaxBase}}만원</h2><hr>
    <div>
      <TaxRate :group="{TaxBase, Taxation}"/>
    </div>
  </div>
</template>

<script>
import TaxRate from '../components/TaxRate.vue'
export default {
  name: 'IncomeIn',
  components: { 
    TaxRate, 
  },
  data: function() {
    return{
      Salary : 0,
      Taxation : 0,
      TaxBase : 0
      
    }
  },
  methods: {
    inputI: function() {
      if (this.Salary <= 150) {
        this.TaxBase = 0
      } else {
        this.TaxBase = this.Salary - 150
      }
    }
  }

}
</script>

<style>

</style>