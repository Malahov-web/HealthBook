// goods.js
import GoodsServices from "@/services/GoodsServices.js";


export default {
    state: {
        goods: [],
        brands: [],

        // release_form 
        releaseForms: {
            "1": "Tablets",
            "2": "Capsules",
            "3": "Spray",
            // water soluble tablet ?
            // lozeng tablet - рассасывательная таблетка
        },

        typesColors: {
            // 1: "orange",
            1: "orange darken-3",
            2: "blue",
            3: "green",
            // 3: "blue lighten-2",
            // 4: "blue--text text--lighten-3",
            // 4: "blue  lighten-3",
            // 4: "blue lighten-2",
            4: "light-blue lighten-2",
            // 4: "teal",
        },
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {

        SET_GOODS(state, goods) {
            state.goods = goods;
        },

        ADD_GOODS_ITEM(state, goodsItem) {
            // state
            state.goods.push(goodsItem);
        },

        SET_BRANDS(state, brands) {
            state.brands = brands;
        },
    },
    actions: {
        fetchGoods({ commit }) {
            GoodsServices.getGoods().then((response) => {
                commit("SET_GOODS", response.data);
                console.log("goods has been fetched:", response); // <--- here
            });
        },

        fetchBrands({ commit }) {
            // BrandsServices.getBrands().then((response) => {
            GoodsServices.getBrands().then((response) => {
                commit("SET_BRANDS", response.data);
                console.log("brands has been fetched:", response); // <--- here
            });
        },

        // addGoodsItem({ commit }) {
        addGoodsItem({ commit, }, goodsItem) {

            commit("ADD_GOODS_ITEM", goodsItem);

            // GoodsServices.getGoods().then((response) => {
            //     commit("SET_BRANDS", response.data);
            //     console.log("goods has been fetched:", response); // <--- here
            // });
        },

    }
};