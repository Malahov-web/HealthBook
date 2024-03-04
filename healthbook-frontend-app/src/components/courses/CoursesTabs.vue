<template>
  <div>
    CoursesTabs

    <v-tabs v-model="tab" __background-color="primary" color="green" __dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" hide-slider="true">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
        __transition="fade-transition"
        __reverse-transition="fade-transition"
        transition="false"
        reverse-transition="false"
      >
        <v-card flat>
          <component
            v-bind:is="currentTabName"
            :courses="courses"
            :coursesTypes="coursesTypes"
            __inline-template
          ></component>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import CoursesList from "@/components/courses/CoursesList.vue";
import CoursesGraph from "@/components/courses/CoursesGraph.vue";
import CoursesAdd from "@/components/courses/CoursesAdd.vue";

export default {
  name: "CoursesTabs",
  components: {
    CoursesList,
    CoursesGraph,
    CoursesAdd,
  },

  props: {
    courses: {
      type: Array,
      default: () => {
        return [];
      },
    },

    coursesTypes: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      //   tab: null,
      tab: 0,
      //   tab: "CoursesGraph",
      items: [
        {
          title: "Add",
          //   name: "list",
          tab: "CoursesAdd",
        },
        {
          title: "Graph",
          //   name: "graph", // name
          tab: "CoursesGraph", // name
        },
        {
          title: "List",
          //   name: "list",
          tab: "CoursesList",
        },
      ],
    };
  },

  computed: {
    currentTabName() {
      //   return this.items[this.tab]["tab"];
      return this.items[this.tab]["tab"] || "CoursesGraph";
    },
  },
};
</script>

<style lang="scss" scoped></style>
