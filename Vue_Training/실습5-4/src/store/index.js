import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		orderList: [],
		menuList: [
			{
				title: "아메리카노",
				price: 3000,
				selected: false,
				image: "https://source.unsplash.com/featured/?americano",
			},
			{
				title: "라떼",
				price: 4000,
				selected: false,
				image: "https://source.unsplash.com/featured/?latte",
			},
			{
				title: "카푸치노",
				price: 4500,
				selected: false,
				image: "https://source.unsplash.com/featured/?capucchino",
			},
		],
		sizeList: [
			{
				name: "small",
				price: 0,
				selected: false,
			},
			{
				name: "medium",
				price: 500,
				selected: false,
			},
			{
				name: "large",
				price: 1000,
				selected: false,
			},
		],
		optionList: [
			{
				type: '샷',
				price: 500,
				count: 0,
			},
			{
				type: '바닐라',
				price: 800,
				count: 0,
			},
			{
				type: '카라멜',
				price: 1000,
				count: 0,
			},
		],

		selectedMenu: {},
		selectedSize: {},
	},
	getters: {
		totalOrderCount(state) {
			return state.orderList.length;
		},
		totalOrderPrice(state) {
			return state.orderList.reduce((sum, order) => {
				sum += order.menu.price + order.size.price
				order.options.forEach((option) => {
					sum += option.price * option.count
				})
				return sum;
			}, 0);
		},
	},
	mutations: {
		addOrder(state) {
			const selectedOptions = JSON.parse(JSON.stringify(state.optionList))
			state.orderList.push({
				menu: state.selectedMenu,
				size: state.selectedSize,
				options : selectedOptions
			})
			console.log(state.orderList)
		},
		updateMenuList(state, selectedMenu) {
			state.menuList = state.menuList.map((menu) => {
				if (menu.title === selectedMenu.title) {
					menu.selected = true;
					state.selectedMenu = selectedMenu;
				} else {
					menu.selected = false;
				}
				return menu;
			});
		},
		updateSizeList(state, selectedSize) {
			state.sizeList = state.sizeList.map((size) => {
				if (size.name === selectedSize.name) {
					size.selected = true;
					state.selectedSize = selectedSize;
				} else {
					size.selected = false;
				}
				return size;
			});
		},
		INCREASE_COUNT(state, option) {
			const index = state.optionList.indexOf(option)
			state.optionList[index].count += 1
		},
		DECREASE_COUNT(state, option) {
			const index = state.optionList.indexOf(option)
			if (state.optionList[index].count > 0) {
				state.optionList[index].count -= 1
			} else {
				state.optionList[index].count = 0
			}
		},
	},
	actions: {
		selectMenu(context, selectedMenu) {
			context.commit("updateMenuList", selectedMenu);
		},
		selectSize(context, selectedSize) {
			context.commit("updateSizeList", selectedSize);
		},
		addOrder(context) {
			context.commit("addOrder");
		},
		increaseCount(context, option) {
			context.commit("INCREASE_COUNT", option);
		},
		decreaseCount(context, option) {
			context.commit("DECREASE_COUNT", option);
		}
	},
	modules: {},
});
