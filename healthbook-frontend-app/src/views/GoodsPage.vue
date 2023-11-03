<template>
  <v-container class="">
    <v-row __no-gutters>
      <v-col lg="2" class="sidebar">Sidebar </v-col>

      <v-col lg="10">
        <div>Goods Page</div>

        <!-- <CoursesTabs
          class="asd"
          :courses="courses"
          :coursesTypes="coursesTypes"
        ></CoursesTabs> -->

        <!-- <Goods class="asd"></Goods> -->

        <v-row>
          <v-col lg="10" offset-lg="1">
            <GoodsList class="asd" :goods="goods"></GoodsList>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoodsList from "@/components/goods/GoodsList.vue";

export default {
  name: "GoodsPage",
  components: {
    GoodsList,
  },
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
