<template>
  <div class="menu-list">
    <h1>3. 옵션을 고르세요.</h1>
      <option-list-item v-for="(option,index) in optionList" :key="index" :option="option"
      ></option-list-item>
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'


export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList;
    },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>

</style>