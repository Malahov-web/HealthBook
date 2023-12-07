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
            <!-- <GoodsList
              class="asd"
              :goods="goods"
              :coursesTypes="coursesTypes"
            ></GoodsList> -->

            <!-- <GoodsAdd class="asd" :brands="brands" :coursesTypes="coursesTypes">
            </GoodsAdd> -->

            <GoodsCompare class="asd"> </GoodsCompare>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>

    <div class="goods__compare compare __grid">
      <div class="compare__cap">1</div>
      <div class="compare__goods">2</div>
      <div class="compare__spec-names">3</div>
      <div class="compare__spec-values"></div>
    </div> -->
  </v-container>
</template>

<script>
// import GoodsList from "@/components/goods/GoodsList.vue";
// import GoodsAdd from "@/components/goods/GoodsAdd.vue";
import GoodsCompare from "@/components/goods/GoodsCompare.vue";

export default {
  name: "GoodsPage",
  components: {
    // GoodsList,
    // GoodsAdd,
    GoodsCompare,
  },
  created() {
    this.$store.dispatch("fetchGoods");
    console.log("Create HOOK in GoodsPage.vue");

    this.$store.dispatch("fetchCoursesTypes");

    this.$store.dispatch("fetchBrands");
  },

  computed: {
    goods() {
      //   return this.$store.state.courses;
      return this.$store.state.goods.goods;
    },

    coursesTypes() {
      //   return this.$store.state.coursesTypes;
      return this.$store.state.courses.coursesTypes;
    },

    brands() {
      //   return this.$store.state.courses;
      return this.$store.state.goods.brands;
    },
  },
};
</script>

<style lang="scss" scoped></style>
