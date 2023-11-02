import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Docs from "../views/Docs.vue";

import Register from "../views/Register.vue";
import Courses from "../views/Courses.vue";
import Goods from "../views/GoodsPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    // Main menu - About          Docs          News          Contacts
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/docs",
        name: "Docs",
        component: Docs,
    },

    // Desktop - Register 1
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    // Desktop - Courses
    {
        path: "/courses",
        name: "Courses",
        component: Courses,
    },
    // Desktop (what is mean?) - Goods
    {
        path: "/goods",
        name: "Goods",
        component: Goods,
    },


];

// const router = new VueRouter({
//     routes,
// });
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "menu-main__item--active",
});

export default router;
