<template>
  <v-container class="">
    <v-row __no-gutters>
      <v-col lg="2" class="sidebar">Sidebar </v-col>

      <v-col lg="10">
        <div>Courses</div>

        <CoursesTabs
          class="asd"
          :courses="courses"
          :coursesTypes="coursesTypes"
        ></CoursesTabs>

        <!-- <v-tabs>
          <v-tab>Item One</v-tab>
          <v-tab>Item Two</v-tab>
          <v-tab>Item Three</v-tab>
        </v-tabs> -->

        <!-- <v-tabs>
          <v-tab v-for="item in tabs" :key="item.name">
            {{ item.title }}
          </v-tab>
        </v-tabs> -->

        <!-- <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs> -->

        <!-- <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items> -->

        <!-- <CoursesList
          class="asd"
          v-bind:courses="courses"
          v-bind:coursesTypes="coursesTypes"
        ></CoursesList> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import CoursesList from "@/components/courses/CoursesList.vue";
import CoursesTabs from "@/components/courses/CoursesTabs.vue";

export default {
  name: "Courses",
  components: {
    // Courses,
    // CoursesList,
    CoursesTabs,
  },

  created() {
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchCoursesTypes");
    console.log("Create HOOK");
  },

  data() {
    return {
      //   tabs: [
      //     {
      //       title: "Graph",
      //       name: "graph", // name
      //     },
      //     {
      //       title: "List",
      //       name: "list",
      //     },
      //   ],
    };
  },

  computed: {
    // getCartProducts() {
    courses() {
      //   return this.$store.state.courses;
      return this.$store.state.courses.courses;
    },

    coursesTypes() {
      //   return this.$store.state.coursesTypes;
      return this.$store.state.courses.coursesTypes;
    },
  },
};
</script>

<style lang="scss" scoped></style>
