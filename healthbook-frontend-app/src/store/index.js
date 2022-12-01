import Vue from "vue";
import Vuex from "vuex";
// Modules
import courses from "@/store/modules/courses.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        courses: courses,
        // products_modules: products
        // products_module: products,
        // products: products // v3
        // categories: categories,
        // categories,
        // notifications,


    },
    state: {},
    mutations: {},
    actions: {},

});
