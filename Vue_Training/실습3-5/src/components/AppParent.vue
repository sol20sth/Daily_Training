<template>
  <div class="red">
    <h1>AppParent</h1>
    <input type="text" v-model="ParentData" @input="inputP">
    <p>appData: {{appData}}</p>
    <p>ParentData: {{ParentData}}</p>
    <p>childData: {{childData}}</p>
    <AppChild :allData="{'appData':appData, 'ParentData':ParentData}" @send-child-parent="getChild" />
  </div>
</template>

<script>
import AppChild from "../components/AppChild.vue"

export default {
    name: 'AppParent',
    components: {
        AppChild,
    },
    data: function(){
        return {
            childData:'',
            ParentData:''
        }
    },
    props: {
        appData: String,
    },
    methods: {
        inputP: function() {
            this.$emit('send-parent-app', this.childData, this.ParentData)
        },
        getChild: function(dataChild) {
            this.childData = dataChild
            this.$emit('send-parent-app', this.childData, this.ParentData)
        }
    }
}
</script>

<style>
.red {
  border: 1px solid red;
}
</style>