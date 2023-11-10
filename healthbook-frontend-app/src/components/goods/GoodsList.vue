<template>
  <div>
    <!-- GoodsList -->

    <h1 class="page-title">Goods</h1>
    <div class="page-subtitle">
      All goods that we use to care about our health.
    </div>

    <div class="goods-toolbar toolbar goods__toolbar">
      <v-row>
        <v-col lg="6">
          <div class="goods__search search">
            <!-- Search -->
            <v-text-field
              label="Find good.."
              __outlined
              __dense
              filled
              color="green"
              v-model="inputText"
              @input="onInput"
            ></v-text-field>
          </div>
        </v-col>
        <v-col lg="3" offset-lg="3">
          <div class="goods__add">
            <!-- button Add -->
            <v-btn color="green" x-large block outlined dark> Add Good </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="goods__list mt-12">
      <GoodsTable
        :goods="goods"
        :coursesTypes="coursesTypes"
        :search="inputText"
        class="goods__table"
      >
      </GoodsTable>
    </div>

    <!-- <div class="goods__pagination">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div> -->
  </div>
</template>

<script>
import GoodsTable from "@/components/goods/GoodsTable.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsTable,
  },

  props: {
    goods: {
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
      inputText: "",
      //   inputText: "youtub", // TEMP DEV
      //   inputText: "loud", // +
      //   inputText: "live", //

      // Поиск
      page: 1,
      pageCount: 0,
      itemsPerPage: 10, // 3,

      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Brand", value: "brand" },
        { text: "Type", value: "type" },
        { text: "Form ", value: "release_form" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
