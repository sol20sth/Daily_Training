<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="d-flex">
      <div>
        <MenuList />
      </div>
      <div>
        <SizeList />
      </div>
      <div>
        <OptionList />
      </div>
    </div>
    <div>
      <button @click="pushResult">장바구니 담기</button>
    </div>
    <div>
      <OrderList />
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue"
import OptionList from "@/components/OptionList.vue"
import SizeList from "@/components/SizeList.vue"
import OrderList from "@/components/OrderList.vue"
export default {
  name: 'App',
  components: {
    MenuList,
    OptionList,
    SizeList,
    OrderList,
  },
  computed: {
    MenuS() {
      return this.$store.state.MenuSize.menuS
    },
    SizeS() {
      return this.$store.state.MenuSize.sizeS
    },
    OrderO() {
      return this.$store.state.orderList
    }
  },
  methods: {
    pushResult() {
        this.$store.commit('addOrder', [this.MenuS, this.SizeS])
      
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
