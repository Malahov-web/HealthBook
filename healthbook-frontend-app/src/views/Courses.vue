<template>
  <v-container class="">
    <v-row __no-gutters>
      <v-col lg="2" class="sidebar">Sidebar </v-col>

      <v-col lg="10">
        <div>Courses</div>

        <CoursesList
          class="asd"
          v-bind:courses="courses"
          v-bind:coursesTypes="coursesTypes"
        ></CoursesList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoursesList from "@/components/courses/CoursesList.vue";

export default {
  name: "Courses",
  components: {
    // Courses,
    CoursesList,
  },

  created() {
    this.$store.dispatch("fetchCourses");
    this.$store.dispatch("fetchCoursesTypes");
    console.log("Create HOOK");
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
