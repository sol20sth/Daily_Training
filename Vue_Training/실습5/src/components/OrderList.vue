<template>
  <div>
    <h3>주문내역</h3>
    <OrderListItem v-for="order in orderList" :key="order.id" :order="order"/>
  {{orderList}}
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem.vue"

export default {
  name: 'OrderList',
  components : {
    OrderListItem,
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    // totalOrderCount: function () {
    //   return this.$store.state.orderList.count
    // },
    // totalOrderPrice: function () {
    // },
  },
}
</script>

<style>
</style>