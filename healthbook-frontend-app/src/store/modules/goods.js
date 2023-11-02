// goods.js
import GoodsServices from "@/services/GoodsServices.js";


export default {
    state: {
        goods: [],
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
    },
    actions: {
        fetchGoods({ commit }) {
            GoodsServices.getGoods().then((response) => {
                commit("SET_GOODS", response.data);
                console.log("goods has been fetched:", response); // <--- here
            });
        },
    }
};