import CoursesServices from "@/services/CoursesServices.js";

export default {
    state: {
        // value: 'my value',
        courses: [],
        coursesTypes: [],

        colorScheme: {
            // "medicine_name" : "colors.name"
            // "Multivitamin": "E67E22",
            // "C": "F1C40F",
            // "Iod": "2980B9",
            // "D3": "16A085",
            // "Glycine": "27AE60",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",
            // "Multivitamin": "HEX",

            "Multivitamin": "CARROT",
            "C": "ORANGE",
            "Iod": "BELIZE HOLE",
            "D3": "GREEN SEA",
            "Glycine": "NEPHRITIS",
            "Omega-3": "SUN FLOWER",
            "Fish fat": "SUN FLOWER",
            "Magnesium": "PETER RIVER",
            "Iron": "POMEGRANATE",
            "Spirulina Plantensis": "TURQUOISE",
            //,
            "Rutin": "POMEGRANATE",
            "Zinc": "BELIZE HOLE",
            "Selen": "AMETHYST",
            "Марал Энергия Moningraf": "CARROT",
        },


        "colors": [
            {
                "name": "TURQUOISE",
                "hex": "#1abc9c"
            },
            {
                "name": "EMERALD",
                "hex": "#2ecc71"
            },
            {
                "name": "PETER RIVER",
                "hex": "#3498db"
            },
            {
                "name": "AMETHYST",
                "hex": "#9b59b6"
            },
            {
                "name": "WET ASPHALT",
                "hex": "#34495e"
            },
            {
                "name": "GREEN SEA",
                "hex": "#16a085"
            },
            {
                "name": "NEPHRITIS",
                "hex": "#27ae60"
            },
            {
                "name": "BELIZE HOLE",
                "hex": "#2980b9"
            },
            {
                "name": "WISTERIA",
                "hex": "#8e44ad"
            },
            {
                "name": "MIDNIGHT BLUE",
                "hex": "#2c3e50"
            },
            {
                "name": "SUN FLOWER",
                "hex": "#f1c40f"
            },
            {
                "name": "CARROT",
                "hex": "#e67e22"
            },
            {
                "name": "ALIZARIN",
                "hex": "#e74c3c"
            },
            {
                "name": "CLOUDS",
                "hex": "#ecf0f1"
            },
            {
                "name": "CONCRETE",
                "hex": "#95a5a6"
            },
            {
                "name": "ORANGE",
                "hex": "#f39c12"
            },
            {
                "name": "PUMPKIN",
                "hex": "#d35400"
            },
            {
                "name": "POMEGRANATE",
                "hex": "#c0392b"
            },
            {
                "name": "SILVER",
                "hex": "#bdc3c7"
            },
            {
                "name": "ASBESTOS",
                "hex": "#7f8c8d"
            }
        ]
    },

    mutations: {

        SET_COURSES_TYPES(state, coursesTypes) {
            state.coursesTypes = coursesTypes;
        },
        SET_COURSES(state, courses) {
            state.courses = courses;
        },

        // Add

        ADD_COURSES_ITEM(state, coursesItem) {
            // state
            state.courses.push(coursesItem);
        },

    },
    getters: {
        // getCoursesTypes: state => {
        //     return state.coursesTypes;
        // },

        // getColorHex: state => () {

        // }
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

        // Add
        addCoursesItem({ commit }, goodsItem) {


            return CoursesServices.postCoursesItem(goodsItem)
                .then(() => {
                    commit("ADD_COURSES_ITEM", goodsItem);
                    const notification = {
                        type: "success",
                        object: "Your post has been successfully added",
                    };
                    // dispatch("notifications/add", notification, { root: true });
                    console.log('Notification: ');
                    console.log(notification);
                })
                .catch((error) => {
                    const notification = {
                        type: "error",
                        object: "Your post was not added, reason: " + error.message,
                    };
                    // dispatch("notifications/add", notification, { root: true });
                    console.log('Notification: ');
                    console.log(notification);
                });

        },



    }

};
