// compare

export default {
    state: {
        // compareGoodsIds: []
        compareGoodsIds: [41, 42]
        // goodsCompareIds: []
    },


    mutations: {
        ADD_TO_COMPARE(state, newProductId) {
            state.compareGoodsIds.push(newProductId);
            // state.compareGoodsIds.push(21910538);
        },
        REMOVE_FROM_COMPARE(state, removeProductId) {
            // state.compareGoodsIds.push(newProductId);
            // state.compareGoodsIds.push(21910538);

            let newCompareGoodsIds = state.compareGoodsIds.filter((item) => { return item !== removeProductId })
            state.compareGoodsIds = newCompareGoodsIds;
        },
    },
    actions: {
        addToCompare({ commit, state }, newProductId) {

            // if state.compareGoodsIds
            // нету этого продукта
            let isInCompare = state.compareGoodsIds.find((item) => item == newProductId)
            if (!isInCompare) {
                commit("ADD_TO_COMPARE", newProductId);
            }

        },


        removeFromCompare({ commit, state }, removeProductId) {

            // if state.compareGoodsIds
            // нету этого продукта
            let isInCompare = state.compareGoodsIds.find((item) => item == removeProductId)
            if (isInCompare) {
                commit("REMOVE_FROM_COMPARE", removeProductId);
            }

        },
    },

    getters: {
        getProductsCompare(state, getters, rootState) { // +


            const allProducts = rootState.goods.goods;
            const compareGoodsIds = state.compareGoodsIds; // -

            // console.log('compareGoodsIds: ');
            // console.log(compareGoodsIds);

            // console.log('allProducts: ');
            // console.log(allProducts); // +

            // v.1 skynet
            // let productsCompare = compareGoodsIds.map((id) => {
            //     return allProducts[id]
            // });
            // v.2 HealthBook

            let productsCompare = compareGoodsIds.map((id) => {
                // return allProducts[id]
                return allProducts.find((item) => { return item.id == id });
            });

            console.log('productsCompare: ');
            console.log(productsCompare);
            return productsCompare
        },

    },



};