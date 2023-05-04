import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {  title : '아메리카노',
        price : 4500,
        selected : false,
        image : 'https://source.unsplash.com/featured/?americano',
      },
      {  title : '카페라떼',
        price : 5000,
        selected : false,
        image : 'https://source.unsplash.com/featured/?cafelatte',
      },
      {  title : '아이스티',
        price : 3000,
        selected : false,
        image : 'https://source.unsplash.com/featured/?icetea',
      },
    ],
    sizeList: [
      {
        name: 'tall',
        price: 0,
        selected: false,
      },
      {
        name: 'grande',
        price: 500,
        selected: false
      },
      {
        name: 'vante',
        price: 1000,
        selected: false
      },
    ],
    MenuSize: [
      {menuS : {}},
      {sizeS : {}}
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state, allOrder) {

      state.orderList.push([allOrder]) 
      
      console.log(state.orderList)


    },
    updateMenuList: function (state, menu) {
      menu.selected = !menu.selected
      state.MenuSize.menuS = menu;
    },
    updateSizeList: function (state, size) {
      size.selected = !size.selected
      state.MenuSize.sizeS = size
    },
  },
  actions: {
  },
  modules: {
  }
})