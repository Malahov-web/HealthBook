import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from 'vue-apexcharts'
// import apexchart from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


// Две строчки ниже добавляют плагин moment глобально
import moment from "moment";
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
