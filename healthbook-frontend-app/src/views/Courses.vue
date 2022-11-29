<template>
  <v-container class="">
    <v-row __no-gutters>
      <v-col lg="2" class="sidebar">Sidebar </v-col>

      <v-col lg="10">
        <div>Courses</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Courses",
  components: {
    // Courses,
  },

  created() {
    this.$store.dispatch("fetchCoursesTypes");
    console.log("Create HOOK");
  },

  computed: {
    coursesTypes() {
      //   return this.$store.getters.getCoursesTypes;
      return this.$store.state.coursesTypes;
    },

    courses() {
      //   return this.$store.getters.getCoursesTypes;
      return this.$store.state.courses;
    },
  },
};
</script>

<style lang="scss" scoped></style>
