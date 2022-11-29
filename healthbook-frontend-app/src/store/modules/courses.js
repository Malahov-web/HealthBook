import CoursesServices from "@/services/CoursesServices.js";

export default {
    state: {
        // value: 'my value',
        courses: [],
        coursesTypes: [],
    },

    mutations: {

        SET_COURSES_TYPES(state, coursesTypes) {
            state.coursesTypes = coursesTypes;
        },
        SET_COURSES(state, courses) {
            state.courses = courses;
        },

    },
    getters: {
        // getCoursesTypes: state => {
        //     return state.coursesTypes;
        // },
    },

    actions: {
        updateValue({ commit }, payload) {
            commit('updateValue', payload);
        },

        fetchCoursesTypes({ commit }) {
            CoursesServices.getCoursesTypes().then((response) => {
                commit("SET_COURSES_TYPES", response.data);
                console.log("coursesTypes has been fetched:", response); // <--- here
            });
        },
        fetchCourses({ commit }) {
            CoursesServices.getCourses().then((response) => {
                commit("SET_COURSES", response.data);
                console.log("courses has been fetched:", response); // <--- here
            });
        },

    }

};

