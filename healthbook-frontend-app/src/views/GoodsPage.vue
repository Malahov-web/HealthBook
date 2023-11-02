<template>
  <v-container class="">
    <v-row __no-gutters>
      <v-col lg="2" class="sidebar">Sidebar </v-col>

      <v-col lg="10">
        <div>Goods</div>

        <!-- <CoursesTabs
          class="asd"
          :courses="courses"
          :coursesTypes="coursesTypes"
        ></CoursesTabs> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchGoods");
    console.log("Create HOOK in GoodsPage.vue");
  },

  computed: {
    goods() {
      //   return this.$store.state.courses;
      return this.$store.state.goods.goods;
    },
  },
};
</script>

<style lang="scss" scoped></style>
