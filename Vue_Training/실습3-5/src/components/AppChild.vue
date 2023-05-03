<template>
  <div class="blue">
    <h1>AppChild</h1>
    <input type="text" v-model="childData" @input="inputC">
    <p>appData: {{allData.appData}}</p>
    <p>parentData: {{allData.ParentData}}</p>
    <p>childData: {{childData}}</p>
  </div>
</template>

<script>
export default {
    name: 'AppChild',
    data: function() {
        return {
            childData:'',
        }
    },
    props: {
        allData: Object,
    },
    methods: {
        inputC: function() {
            this.$emit("send-child-parent", this.childData)
    }
  }
}
</script>

<style>
.blue {
  border: 1px solid blue;
}
</style>